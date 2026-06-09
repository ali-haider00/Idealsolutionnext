import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  to,
  subject,
  html,
  from = 'info@idealsolutionsne.co.uk',
  replyTo = 'info@idealsolutionsne.co.uk'
}: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      replyTo,
    });

    if (error) {
      console.error('Email send error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Email send exception:', err);
    return { 
      success: false, 
      error: err instanceof Error ? err.message : 'Unknown error occurred' 
    };
  }
};

export const sendContactNotification = async ({
  name,
  email,
  phone,
  service,
  message
}: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #083E80; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #083E80; }
        .footer { background: #083E80; color: white; padding: 10px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Ideal Solutions - Business Utilities & Digital Services</p>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Name:</span> ${name}
          </div>
          <div class="field">
            <span class="label">Email:</span> ${email}
          </div>
          ${phone ? `
          <div class="field">
            <span class="label">Phone:</span> ${phone}
          </div>
          ` : ''}
          ${service ? `
          <div class="field">
            <span class="label">Service Interest:</span> ${service}
          </div>
          ` : ''}
          <div class="field">
            <span class="label">Message:</span><br>
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Ideal Solutions contact form.</p>
          <p>© 2024 IDEAL SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({
    to: 'info@idealsolutionsne.co.uk',
    subject: `New Contact Form Submission from ${name}`,
    html,
    replyTo: email
  });
};

export const sendAutoReply = async ({
  name,
  email,
  service
}: {
  name: string;
  email: string;
  service?: string;
}) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting Ideal Solutions</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #083E80; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { background: #083E80; color: white; padding: 10px; text-align: center; font-size: 12px; }
        .button { display: inline-block; padding: 12px 24px; background: #083E80; color: white; text-decoration: none; border-radius: 4px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting Us!</h1>
          <p>Ideal Solutions - Business Utilities & Digital Services</p>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Ideal Solutions. We have received your message and will get back to you shortly.</p>
          ${service ? `
          <p>We see you're interested in our <strong>${service}</strong> services. Our team will provide you with expert advice and competitive quotes tailored to your needs.</p>
          ` : ''}
          <p>While you wait, feel free to explore our services:</p>
          <a href="https://www.idealsolutions.co.uk/utilities-services" class="button">Explore Utilities Services</a>
          <a href="https://www.idealsolutions.co.uk/digitalservices" class="button">Explore Digital Services</a>
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>Our team will review your inquiry within 24 hours</li>
            <li>We'll contact you via email or phone to discuss your requirements</li>
            <li>We'll provide personalized recommendations and quotes</li>
          </ul>
          <p>If you have any urgent questions, please don't hesitate to call us at <strong>+44 7855 175014</strong>.</p>
        </div>
        <div class="footer">
          <p>Ideal Solutions | Empowering UK Businesses</p>
          <p>Email: info@idealsolutionsne.co.uk | Phone: +44 7855 175014</p>
          <p>© 2024 IDEAL SOLUTIONS. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return await sendEmail({
    to: email,
    subject: 'Thank you for contacting Ideal Solutions',
    html
  });
};
