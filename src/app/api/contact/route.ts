import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification, sendAutoReply } from '@/lib/resend';

export const dynamic = 'force-static';
export const revalidate = false;

export async function POST(request: NextRequest) {
  try {
    console.log('Contact API called');
    
    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured. Please contact administrator.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Request body:', body);
    
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send notification to admin
    console.log('Sending notification to admin...');
    const notificationResult = await sendContactNotification({
      name,
      email,
      phone,
      service,
      message
    });

    if (!notificationResult.success) {
      console.error('Failed to send notification:', notificationResult.error);
      return NextResponse.json(
        { success: false, error: `Failed to send notification: ${notificationResult.error}` },
        { status: 500 }
      );
    }

    console.log('Notification sent successfully');

    // Send auto-reply to customer
    console.log('Sending auto-reply to customer...');
    const autoReplyResult = await sendAutoReply({
      name,
      email,
      service
    });

    if (!autoReplyResult.success) {
      console.error('Failed to send auto-reply:', autoReplyResult.error);
      // Don't fail the request if auto-reply fails, just log it
    } else {
      console.log('Auto-reply sent successfully');
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will contact you soon!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
