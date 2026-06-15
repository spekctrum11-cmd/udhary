import { POST } from '@/app/api/contact/route';

describe('POST /api/contact handler', () => {
  it('should return 400 Bad Request for an empty payload', async () => {
    const req = new Request('http://localhost/api/contact', {
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
      firstName: 'Himanshu',
      lastName: 'Kumar',
      phone: '9876543210',
      injectedParam: 'attackerPayload',
    };

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const response = await POST(req);
    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.error).toBe('Validation failed');
  });

  it('should return 200 OK and successfully process sanitized inputs', async () => {
    const validPayload = {
      firstName: 'Himanshu',
      lastName: 'Kumar',
      email: 'himanshu@gmail.com',
      phone: '9876543210',
      query: 'Hello world <script>alert(1)</script>',
    };

    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validPayload),
    });

    const response = await POST(req);
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.message).toBe('Appointment booked successfully');
  });

  it('should return 500 Server Error if JSON parsing fails', async () => {
    const req = {
      json: () => Promise.reject(new Error('Syntax Error')),
    } as any;

    const response = await POST(req);
    expect(response.status).toBe(500);

    const body = await response.json();
    expect(body.error).toBe('Failed to book appointment');
  });
});
