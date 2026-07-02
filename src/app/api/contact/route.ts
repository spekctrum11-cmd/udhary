import { NextResponse } from 'next/server';
import { validateContactPayload, sanitizeString } from '@/lib/security';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 1. Run Validation Schema checks
    const validation = validateContactPayload(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // 2. Sanitize user inputs to prevent HTML/XSS injection
    const sanitizedData = {
      firstName: sanitizeString(data.firstName),
      lastName: sanitizeString(data.lastName),
      email: sanitizeString(data.email),
      phone: sanitizeString(data.phone),
      date: sanitizeString(data.date),
      timeHours: sanitizeString(data.timeHours),
      timeMinutes: sanitizeString(data.timeMinutes),
      timeAmPm: sanitizeString(data.timeAmPm),
      query: sanitizeString(data.query),
    };

    // In a real production application, you would integrate an email service here.
    // For example, using Resend, SendGrid, or Nodemailer.
    // 
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'Care@Udhary.com',
    //   subject: 'New Appointment Booking',
    //   html: `<p>New booking from ${sanitizedData.firstName} ${sanitizedData.lastName}</p>...`
    // });

    // Simulate network latency for beautiful UI animations
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Log the sanitized data securely
    console.log("Appointment Booked Data Received (Sanitized):", sanitizedData);

    return NextResponse.json(
      { message: 'Appointment booked successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}
