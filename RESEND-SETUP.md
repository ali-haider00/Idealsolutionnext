# Resend Email Service Setup Guide

## Overview
Your Ideal Solutions website is now configured to use Resend for email sending. All contact forms will send emails to `info@idealsolutionsne.co.uk` and provide automatic replies to customers.

## Setup Instructions

### 1. Create Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Navigate to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Ideal Solutions Website")
4. Copy the API key

### 3. Configure Environment Variables
1. Create a file named `.env.local` in your project root
2. Add your Resend API key:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Verify Your Domain
1. In Resend dashboard, go to "Domains"
2. Add your domain: `idealsolutionsne.co.uk`
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for domain verification (usually takes a few minutes to a few hours)

## Features Implemented

### ✅ Email Functions
- **Contact Notifications**: All form submissions are sent to `info@idealsolutionsne.co.uk`
- **Auto-Reply**: Customers receive automatic confirmation emails
- **Professional Templates**: Beautiful HTML email templates with your branding
- **Error Handling**: Graceful error handling with user feedback

### ✅ Updated Components
- **Footer**: Updated email and Facebook links
- **Contact Forms**: All forms now use Resend for email sending
- **Contact Information**: Updated to use `info@idealsolutionsne.co.uk`

### ✅ Social Links Updated
- **Facebook**: `https://www.facebook.com/Idealsolutionsne`
- **Email**: `info@idealsolutionsne.co.uk` (added as clickable email icon)

## Files Created/Modified

### New Files
- `src/lib/resend.ts` - Email sending functions
- `src/app/api/contact/route.ts` - API endpoint for contact forms
- `src/components/ContactForm.tsx` - Reusable contact form component
- `.env.local.example` - Environment variables template

### Modified Files
- `src/components/Footer.tsx` - Updated email and Facebook links
- `src/components/ContactSection.tsx` - Updated email addresses
- `src/components/ui/CTA1.tsx` - Updated email address
- `src/app/digitalservices/contact/page.tsx` - Integrated new contact form
- `src/components/mvpblocks/contact-us-1.tsx` - Updated to use Resend

## Testing

### 1. Local Testing
Once you have your API key configured:
1. Start your development server: `npm run dev`
2. Navigate to any contact page:
   - `/digitalservices/contact`
   - `/utilities-services/contact`
3. Fill out the form with test data
4. Submit and check:
   - You should receive an email at `info@idealsolutionsne.co.uk`
   - The test email address should receive an auto-reply

### 2. Production Testing
After deployment:
1. Test all contact forms on the live site
2. Verify emails are being received
3. Check auto-reply functionality

## Email Templates

### Admin Notification Email
- Professional HTML design with your branding
- Includes all form submission details
- Reply-to set to customer's email for easy response

### Customer Auto-Reply
- Branded confirmation email
- Sets expectations for response time
- Includes links to your services
- Professional signature with contact details

## Troubleshooting

### Common Issues

#### 1. Emails Not Sending
- Check your `.env.local` file has the correct API key
- Verify your domain is verified in Resend
- Check browser console for error messages

#### 2. Domain Verification Issues
- Ensure all DNS records are added correctly
- Wait for DNS propagation (can take up to 48 hours)
- Use a DNS checker tool to verify records

#### 3. Form Submission Errors
- Check the browser's network tab for API responses
- Verify the API endpoint is accessible
- Check server logs for detailed error messages

### Error Messages
- **"Failed to send notification"**: Check API key and domain verification
- **"Invalid email format"**: Ensure email field contains valid email
- **"Required fields missing"**: All required fields must be filled

## Benefits

### ✅ Professional Email Delivery
- Reliable email delivery with Resend's infrastructure
- Professional HTML email templates
- Proper email authentication (SPF, DKIM, DMARC)

### ✅ Improved Customer Experience
- Instant auto-reply to customers
- Professional communication
- Clear expectations for response times

### ✅ Better Lead Management
- All inquiries go to your specified email
- Organized email notifications with all details
- Easy reply-to functionality

### ✅ Free Tier Benefits
- Resend offers 3,000 free emails per month
- Perfect for small to medium businesses
- No upfront costs

## Next Steps

1. **Set up Resend Account**: Follow the setup instructions above
2. **Configure Environment**: Add your API key to `.env.local`
3. **Verify Domain**: Complete domain verification in Resend
4. **Test Functionality**: Test all contact forms
5. **Monitor Performance**: Keep an eye on email deliverability

## Support

If you encounter any issues:
- Check Resend documentation: https://resend.com/docs
- Review browser console for JavaScript errors
- Verify API key and domain configuration
- Test with different email addresses

Your contact forms are now professionally configured with reliable email delivery! 🚀
