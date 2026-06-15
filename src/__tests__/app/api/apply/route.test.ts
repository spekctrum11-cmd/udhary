import { POST } from '@/app/api/apply/route';

describe('POST /api/apply handler', () => {
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

  it('should return 400 Bad Request for an empty payload', async () => {
    const req = new Request('http://localhost/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);
    
    const body = await response.json();
    expect(body.error).toBe('Validation failed');
    expect(body.details.length).toBeGreaterThan(0);
  });

  it('should return 400 Bad Request for parameter injection', async () => {
    const payload = {
      ...validApply,
      injectedParam: 'attackerPayload',
    };

    const req = new Request('http://localhost/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.error).toBe('Validation failed');
  });

  it('should return 200 OK and be eligible for standard inputs', async () => {
    const req = new Request('http://localhost/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validApply),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.isEligible).toBe(true);
  });

  it('should return 200 OK and be ineligible for low income', async () => {
    const lowIncomePayload = {
      ...validApply,
      income: "15000"
    };

    const req = new Request('http://localhost/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lowIncomePayload),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.isEligible).toBe(false);
  });

  it('should return 200 OK and be ineligible for high loan amount with moderate income', async () => {
    const highLoanPayload = {
      ...validApply,
      amount: "6000000",
      income: "75000"
    };

    const req = new Request('http://localhost/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(highLoanPayload),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.isEligible).toBe(false);
  });

  it('should return 500 Server Error if JSON parsing fails', async () => {
    const req = {
      json: () => Promise.reject(new Error('Syntax Error')),
    } as any;

    const response = await POST(req);
    expect(response.status).toBe(500);

    const body = await response.json();
    expect(body.error).toBe('Failed to process application');
  });
});
