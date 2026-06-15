jest.useFakeTimers();
const { sanitizeString, hasSqlInjection, hasControlCharacters, validateContactPayload, validateApplyPayload, checkRateLimit } = require('@/lib/security') as typeof import('@/lib/security');

describe('Security & Input Validation Utilities', () => {
  
  describe('sanitizeString', () => {
    it('should strip HTML tags and escape dangerous characters', () => {
      expect(sanitizeString('<script>alert("xss")</script>')).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;');
      expect(sanitizeString('Himanshu & Co')).toBe('Himanshu &amp; Co');
    });

    it('should return empty string for non-string types', () => {
      expect(sanitizeString(null)).toBe('');
      expect(sanitizeString(undefined)).toBe('');
      expect(sanitizeString(123)).toBe('');
    });
  });

  describe('hasSqlInjection', () => {
    it('should detect standard SQL injection signatures', () => {
      expect(hasSqlInjection('UNION SELECT NULL--')).toBe(true);
      expect(hasSqlInjection('OR 1=1')).toBe(true);
      expect(hasSqlInjection('SELECT * FROM users')).toBe(true);
      expect(hasSqlInjection("OR 'a'='a'")).toBe(true);
    });

    it('should return false for harmless strings', () => {
      expect(hasSqlInjection('Himanshu Kumar')).toBe(false);
      expect(hasSqlInjection('Care@Udhary.com')).toBe(false);
    });
  });

  describe('hasControlCharacters', () => {
    it('should detect hidden control characters and null-bytes', () => {
      expect(hasControlCharacters('Himanshu\x00Kumar')).toBe(true);
      expect(hasControlCharacters('Test\x7F')).toBe(true);
    });

    it('should allow normal space and alphabet strings', () => {
      expect(hasControlCharacters('Himanshu Kumar')).toBe(false);
    });
  });

  describe('validateContactPayload', () => {
    const validContact = {
      firstName: "Himanshu",
      lastName: "Kumar",
      email: "himanshu@gmail.com",
      phone: "9876543210",
      date: "2026-06-15",
      timeHours: "10",
      timeMinutes: "30",
      timeAmPm: "AM",
      query: "Help with my loan."
    };

    it('should validate standard correct payloads', () => {
      const res = validateContactPayload(validContact);
      expect(res.isValid).toBe(true);
      expect(res.errors.length).toBe(0);
    });

    it('should reject unrecognized attributes (Mass Assignment Protection)', () => {
      const hijackedPayload = { ...validContact, isAdmin: true, extraKey: 'attack' };
      const res = validateContactPayload(hijackedPayload);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'payload')).toBe(true);
    });

    it('should check maximum string lengths', () => {
      const longNamePayload = { ...validContact, firstName: 'A'.repeat(51) };
      const res = validateContactPayload(longNamePayload);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'firstName')).toBe(true);
    });

    it('should check for SQL Injection or script injections', () => {
      const sqlPayload = { ...validContact, lastName: "Kumar; DROP TABLE blogs;--" };
      const res = validateContactPayload(sqlPayload);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'lastName')).toBe(true);
    });

    it('should validate phone formats', () => {
      const badPhonePayload = { ...validContact, phone: "12345" };
      const res = validateContactPayload(badPhonePayload);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'phone')).toBe(true);
    });
  });

  describe('validateApplyPayload', () => {
    const validApply = {
      loanType: "personal",
      amount: "500000",
      tenure: "3",
      fullName: "Rahul Sharma",
      email: "rahul@example.com",
      mobile: "9876543210",
      employmentType: "salaried",
      income: "75000",
      pan: "ABCDE1234F",
      pincode: "400051"
    };

    it('should validate standard correct apply payloads', () => {
      const res = validateApplyPayload(validApply);
      expect(res.isValid).toBe(true);
    });

    it('should reject invalid Indian PAN format', () => {
      const badPanPayload = { ...validApply, pan: "XYZ123" };
      const res = validateApplyPayload(badPanPayload);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'pan')).toBe(true);
    });

    it('should reject invalid pincodes', () => {
      const badPincodePayload = { ...validApply, pincode: "023456" }; // Pincodes in India don't start with 0
      const res = validateApplyPayload(badPincodePayload);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'pincode')).toBe(true);
    });
  });

  describe('checkRateLimit', () => {

    it('should allow requests within rate limits and then block them', () => {
      const testIp = '10.0.0.1';
      for (let i = 0; i < 10; i++) {
        const check = checkRateLimit(testIp, 10, 60000);
        expect(check.isAllowed).toBe(true);
      }
      // 11th request should be blocked
      const checkBlocked = checkRateLimit(testIp, 10, 60000);
      expect(checkBlocked.isAllowed).toBe(false);
    });

    it('should clean up rate limit map on interval', () => {
      const testIp = '10.0.0.2';
      checkRateLimit(testIp, 10, 60000);
      
      // Advance Jest timers by 1 hour (3600000 ms) to trigger the cleanup interval
      jest.advanceTimersByTime(3600000);
      
      // The entry should be removed or cleaned up. Let's test that making a new request starts fresh.
      const check = checkRateLimit(testIp, 10, 60000);
      expect(check.currentCount).toBe(1);
    });
  });

  describe('Validation Edge Cases', () => {
    it('validateContactPayload should reject null/undefined/non-object payloads', () => {
      const resNull = validateContactPayload(null);
      expect(resNull.isValid).toBe(false);
      expect(resNull.errors[0].field).toBe('payload');

      const resString = validateContactPayload('not-an-object');
      expect(resString.isValid).toBe(false);
    });

    it('validateContactPayload should reject invalid hour strings (non-numeric)', () => {
      const invalidHours = {
        firstName: "Himanshu",
        lastName: "Kumar",
        phone: "9876543210",
        timeHours: "abc"
      };
      const res = validateContactPayload(invalidHours);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'timeHours')).toBe(true);
    });

    it('validateApplyPayload should accept number values for amount and income', () => {
      const validApply = {
        loanType: "personal",
        amount: 500000,
        tenure: "3",
        fullName: "Rahul Sharma",
        email: "rahul@example.com",
        mobile: "9876543210",
        employmentType: "salaried",
        income: 75000,
        pan: "ABCDE1234F",
        pincode: "400051"
      };
      const res = validateApplyPayload(validApply);
      expect(res.isValid).toBe(true);
    });

    it('validateApplyPayload should reject null/undefined/non-object payloads', () => {
      const resNull = validateApplyPayload(null);
      expect(resNull.isValid).toBe(false);
      expect(resNull.errors[0].field).toBe('payload');

      const resString = validateApplyPayload('not-an-object');
      expect(resString.isValid).toBe(false);
    });

    it('validateApplyPayload should reject unrecognized attributes (Mass Assignment)', () => {
      const validApply = {
        loanType: "personal",
        amount: "500000",
        tenure: "3",
        fullName: "Rahul Sharma",
        email: "rahul@example.com",
        mobile: "9876543210",
        employmentType: "salaried",
        income: "75000",
        pan: "ABCDE1234F",
        pincode: "400051",
        isAdmin: true // injection
      };
      const res = validateApplyPayload(validApply);
      expect(res.isValid).toBe(false);
      expect(res.errors.some(e => e.field === 'payload')).toBe(true);
    });

    it('checkRateLimit should use default parameters when limit and windowMs are not provided', () => {
      const testIp = '10.0.0.9';
      const check = checkRateLimit(testIp);
      expect(check.isAllowed).toBe(true);
    });

    it('should validate successfully when optional field hours is empty string', () => {
      const payload = {
        firstName: "Himanshu",
        lastName: "Kumar",
        email: "himanshu@gmail.com",
        phone: "9876543210",
        timeHours: ""
      };
      const res = validateContactPayload(payload);
      expect(res.isValid).toBe(true);
    });
  });

});
