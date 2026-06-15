import { NextResponse } from 'next/server';
import { validateApplyPayload, sanitizeString } from '@/lib/security';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 1. Run Validation Schema checks
    const validation = validateApplyPayload(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // 2. Sanitize user inputs to prevent HTML/XSS injection
    const sanitizedData = {
      loanType: sanitizeString(data.loanType),
      amount: sanitizeString(data.amount),
      tenure: sanitizeString(data.tenure),
      fullName: sanitizeString(data.fullName),
      email: sanitizeString(data.email),
      mobile: sanitizeString(data.mobile),
      employmentType: sanitizeString(data.employmentType),
      income: sanitizeString(data.income),
      pan: sanitizeString(data.pan).toUpperCase(),
      pincode: sanitizeString(data.pincode),
    };

    // Log the sanitized application data securely
    console.log("Application API Received Data (Sanitized):", sanitizedData);

    // Simulate network latency for beautiful UI animations
    await new Promise(resolve => setTimeout(resolve, 2500));

    const incomeNum = parseInt(sanitizedData.income, 10);
    const amountNum = parseInt(sanitizedData.amount, 10);

    let isEligible = true;
    if (incomeNum < 20000 || (amountNum > 5000000 && incomeNum < 100000)) {
      isEligible = false;
    }

    return NextResponse.json(
      { success: true, isEligible },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}
