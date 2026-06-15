/**
 * Security utilities for input sanitization, XSS/SQLi prevention,
 * schema validation, and in-memory rate limiting.
 */

import { z } from 'zod';

// ----------------------------------------------------
// 1. Core Sanitization & Injection Prevention
// ----------------------------------------------------

/**
 * Sanitizes a string by trimming whitespace and escaping critical HTML tags
 * to prevent Cross-Site Scripting (XSS).
 */
export function sanitizeString(val: unknown): string {
  if (typeof val !== 'string') {
    return '';
  }
  return val
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Detects common SQL Injection signatures (tautologies, union attacks, stacked queries, comments).
 */
export function hasSqlInjection(val: string): boolean {
  const normalized = val.toUpperCase();
  
  // Look for common SQL injection patterns:
  // - Stacked queries (e.g., SELECT ...; DROP TABLE)
  // - SQL inline comment markers (e.g., --, /*)
  // - Tautology patterns (e.g., OR 1=1, OR 'a'='a')
  // - UNION SELECT or standard destructive statements
  const sqlKeywords = [
    /UNION\s+SELECT/i,
    /SELECT\s+.*\s+FROM/i,
    /INSERT\s+INTO/i,
    /DROP\s+TABLE/i,
    /DELETE\s+FROM/i,
    /UPDATE\s+.*\s+SET/i,
    /--/,
    /\/\*/,
    /;\s*(DROP|DELETE|INSERT|SELECT|UPDATE|UNION)/i,
    /\bOR\s+\d+\s*=\s*\d+/i,
    /\bOR\s+'[^']+'\s*=\s*'[^']+'/i,
    /\bOR\s+"[^"]+"\s*=\s*"[^"]+"/i
  ];

  return sqlKeywords.some(regex => regex.test(normalized));
}

/**
 * Detects hidden control characters (ASCII 0-31 and 127) excluding common white-space formatting (tab, LF, CR)
 * to block malicious non-printable payloads or characters.
 */
export function hasControlCharacters(val: string): boolean {
  const controlCharRegex = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/;
  return controlCharRegex.test(val);
}

// ----------------------------------------------------
// 2. Schema Validation Rules & Schemas
// ----------------------------------------------------

export interface ValidationError {
  field: string;
  message: string;
}

// Email format regex (RFC 5322 compliant simple check)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Indian Phone Number format (10 digits, starts with 6-9)
const PHONE_REGEX = /^[6-9]\d{9}$/;

// Indian PAN Format (5 letters, 4 digits, 1 letter)
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

// Indian Pincode Format (6 digits, starts with 1-9)
const PINCODE_REGEX = /^[1-9][0-9]{5}$/;

// Simple Date Format YYYY-MM-DD
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Validates the Contact form API payload.
 */
export function validateContactPayload(data: any): { isValid: boolean; errors: ValidationError[] } {
  if (!data || typeof data !== 'object') {
    return { isValid: false, errors: [{ field: 'payload', message: 'Invalid payload structure' }] };
  }

  const contactSchema = z.object({
    firstName: z.string()
    .trim()
    .min(1, { message: 'First name is required' })
    .max(50, { message: 'First name cannot exceed 50 characters' })
    .refine(val => !hasSqlInjection(val) && !hasControlCharacters(val), {
      message: 'Invalid characters or pattern detected'
    }),
    lastName: z.string()
    .trim()
    .min(1, { message: 'Last name is required' })
    .max(50, { message: 'Last name cannot exceed 50 characters' })
    .refine(val => !hasSqlInjection(val) && !hasControlCharacters(val), {
      message: 'Invalid characters or pattern detected'
    }),
    email: z.string().trim()
      .max(100, { message: 'Email address cannot exceed 100 characters' })
      .refine(val => val === '' || EMAIL_REGEX.test(val), {
        message: 'Invalid email address format'
      })
      .refine(val => val === '' || !hasControlCharacters(val), {
        message: 'Invalid characters detected'
      })
      .optional()
      .nullable()
      .or(z.literal('')),
    phone: z.string()
    .trim()
    .min(1, { message: 'Phone number is required' })
    .refine(val => PHONE_REGEX.test(val), {
      message: 'Phone number must be a valid 10-digit Indian mobile number'
    }),
    date: z.string().trim()
      .refine(val => val === '' || DATE_REGEX.test(val), {
        message: 'Date must be in YYYY-MM-DD format'
      })
      .optional()
      .nullable()
      .or(z.literal('')),
    timeHours: z.string().trim()
      .refine(val => {
        if (val === '') return true;
        const hoursNum = parseInt(val, 10);
        return !isNaN(hoursNum) && hoursNum >= 1 && hoursNum <= 12;
      }, {
        message: 'Hours must be between 01 and 12'
      })
      .optional()
      .nullable()
      .or(z.literal('')),
    timeMinutes: z.string().trim()
      .refine(val => val === '' || ['00', '15', '30', '45'].includes(val), {
        message: 'Minutes must be 00, 15, 30, or 45'
      })
      .optional()
      .nullable()
      .or(z.literal('')),
    timeAmPm: z.string().trim()
      .refine(val => val === '' || ['AM', 'PM'].includes(val), {
        message: 'Time indicator must be AM or PM'
      })
      .optional()
      .nullable()
      .or(z.literal('')),
    query: z.string().trim()
      .max(1000, { message: 'Query cannot exceed 1000 characters' })
      .refine(val => !hasSqlInjection(val) && !hasControlCharacters(val), {
        message: 'Invalid query contents detected'
      })
      .optional()
      .nullable()
      .or(z.literal(''))
  }).strict();

  const result = contactSchema.safeParse(data);
  if (!result.success) {
    const errors: ValidationError[] = [];
    
    // Extract mass assignment / unrecognized parameters first
    const unrecognizedIssues = result.error.issues.filter(issue => issue.code === 'unrecognized_keys') as any[];
    if (unrecognizedIssues.length > 0) {
      const keys: string[] = [];
      unrecognizedIssues.forEach(issue => {
        if (issue.keys) {
          keys.push(...issue.keys);
        }
      });
      if (keys.length > 0) {
        errors.push({
          field: 'payload',
          message: `Unrecognized request parameter: ${keys.join(', ')}`
        });
      }
    }

    // Deduplicate mapped errors by field to match standard behavior
    const fieldErrors = new Set<string>();
    result.error.issues.forEach(issue => {
      if (issue.code !== 'unrecognized_keys') {
        const field = String(issue.path[0]);
        if (!fieldErrors.has(field)) {
          fieldErrors.add(field);
          errors.push({
            field,
            message: issue.message
          });
        }
      }
    });

    return { isValid: false, errors };
  }

  return { isValid: true, errors: [] };
}

/**
 * Validates the Loan Application form API payload.
 */
export function validateApplyPayload(data: any): { isValid: boolean; errors: ValidationError[] } {
  if (!data || typeof data !== 'object') {
    return { isValid: false, errors: [{ field: 'payload', message: 'Invalid payload structure' }] };
  }

  const applySchema = z.object({
    loanType: z.string()
    .min(1, { message: 'Loan type is required' })
    .refine(val => ['personal', 'business', 'home', 'lap'].includes(val), {
      message: 'Invalid loan type selected'
    }),
    amount: z.union([z.string(), z.number()])
    .refine(val => val !== '' && val !== 0, {
      message: 'Loan amount is required'
    })
    .transform(val => typeof val === 'number' ? val : parseInt(val, 10))
    .refine(val => !isNaN(val) && val >= 1000 && val <= 10000000, {
      message: 'Amount must be between ₹1,000 and ₹1,00,00,000'
    }),
    tenure: z.string()
    .min(1, { message: 'Tenure is required' })
    .refine(val => ['1', '3', '5', '10'].includes(val), {
      message: 'Invalid tenure selected'
    }),
    fullName: z.string()
    .trim()
    .min(1, { message: 'Full name is required' })
    .max(100, { message: 'Full name cannot exceed 100 characters' })
    .refine(val => !hasSqlInjection(val) && !hasControlCharacters(val), {
      message: 'Invalid characters or pattern detected'
    }),
    email: z.string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .max(100, { message: 'Email address cannot exceed 100 characters' })
    .refine(val => EMAIL_REGEX.test(val), {
      message: 'Invalid email address format'
    })
    .refine(val => !hasControlCharacters(val), {
      message: 'Invalid characters detected'
    }),
    mobile: z.string()
    .trim()
    .min(1, { message: 'Mobile number is required' })
    .refine(val => PHONE_REGEX.test(val), {
      message: 'Mobile number must be a valid 10-digit Indian mobile number'
    }),
    employmentType: z.string()
    .min(1, { message: 'Employment type is required' })
    .refine(val => ['salaried', 'self_employed'].includes(val), {
      message: 'Invalid employment type selected'
    }),
    income: z.union([z.string(), z.number()])
    .refine(val => val !== '' && val !== 0, {
      message: 'Monthly income is required'
    })
    .transform(val => typeof val === 'number' ? val : parseInt(val, 10))
    .refine(val => !isNaN(val) && val >= 0 && val <= 10000000, {
      message: 'Monthly income must be a valid number'
    }),
    pan: z.string()
    .trim()
    .min(1, { message: 'PAN card number is required' })
    .transform(val => val.toUpperCase())
    .refine(val => PAN_REGEX.test(val), {
      message: 'PAN must be a valid 10-character alphanumeric code (e.g. ABCDE1234F)'
    }),
    pincode: z.string()
    .trim()
    .min(1, { message: 'Pincode is required' })
    .refine(val => PINCODE_REGEX.test(val), {
      message: 'Pincode must be a valid 6-digit Indian postal code'
    })
  }).strict();

  const result = applySchema.safeParse(data);
  if (!result.success) {
    const errors: ValidationError[] = [];

    // Extract mass assignment / unrecognized parameters first
    const unrecognizedIssues = result.error.issues.filter(issue => issue.code === 'unrecognized_keys') as any[];
    if (unrecognizedIssues.length > 0) {
      const keys: string[] = [];
      unrecognizedIssues.forEach(issue => {
        if (issue.keys) {
          keys.push(...issue.keys);
        }
      });
      if (keys.length > 0) {
        errors.push({
          field: 'payload',
          message: `Unrecognized request parameter: ${keys.join(', ')}`
        });
      }
    }

    // Deduplicate mapped errors by field to match standard behavior
    const fieldErrors = new Set<string>();
    result.error.issues.forEach(issue => {
      if (issue.code !== 'unrecognized_keys') {
        const field = String(issue.path[0]);
        if (!fieldErrors.has(field)) {
          fieldErrors.add(field);
          errors.push({
            field,
            message: issue.message
          });
        }
      }
    });

    return { isValid: false, errors };
  }

  return { isValid: true, errors: [] };
}

// ----------------------------------------------------
// 3. Sliding Window IP Rate Limiter
// ----------------------------------------------------

interface RateLimitTracker {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitTracker>();

// Clean up memory cache hourly to prevent memory leaks in long-running processes
if (typeof global !== 'undefined') {
  const globalAny = global as any;
  if (!globalAny.__rateLimitInterval) {
    globalAny.__rateLimitInterval = setInterval(() => {
      const now = Date.now();
      const oneMinuteAgo = now - 60000;
      
      for (const [ip, tracker] of rateLimitMap.entries()) {
        tracker.timestamps = tracker.timestamps.filter(ts => ts > oneMinuteAgo);
        if (tracker.timestamps.length === 0) {
          rateLimitMap.delete(ip);
        }
      }
    }, 3600000); // 1 hour
  }
}

/**
 * Checks if a given IP has exceeded the rate limit (e.g. 10 requests per 60 seconds).
 * Returns true if allowed, false if blocked (exceeded limit).
 */
export function checkRateLimit(ip: string, limit = 10, windowMs = 60000): { isAllowed: boolean; currentCount: number } {
  const now = Date.now();
  const windowStart = now - windowMs;

  let tracker = rateLimitMap.get(ip);
  if (!tracker) {
    tracker = { timestamps: [] };
    rateLimitMap.set(ip, tracker);
  }

  // Filter out timestamps outside the sliding window
  tracker.timestamps = tracker.timestamps.filter(ts => ts > windowStart);

  if (tracker.timestamps.length >= limit) {
    return { isAllowed: false, currentCount: tracker.timestamps.length };
  }

  tracker.timestamps.push(now);
  return { isAllowed: true, currentCount: tracker.timestamps.length };
}
