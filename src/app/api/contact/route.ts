import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real production application, you would integrate an email service here.
    // For example, using Resend, SendGrid, or Nodemailer.
    // 
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'Care@Udhary.com',
    //   subject: 'New Appointment Booking',
    //   html: `<p>New booking from ${data.firstName} ${data.lastName}</p>...`
    // });

    // Simulate network latency for beautiful UI animations
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Log the data to confirm it's working
    console.log("Appointment Booked Data Received:", data);

    return NextResponse.json(
      { message: 'Appointment booked successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}
