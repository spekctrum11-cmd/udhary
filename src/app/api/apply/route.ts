import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log the data to confirm it's working
    console.log("Application API Received Data:", data);

    // Simulate network latency for beautiful UI animations
    await new Promise(resolve => setTimeout(resolve, 2500));

    const incomeNum = parseInt(data.income || "0");
    const amountNum = parseInt(data.amount || "0");

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
