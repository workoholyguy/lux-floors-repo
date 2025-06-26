import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Create a test account (in production, use real credentials)
    // const testAccount = await nodemailer.createTestAccount();
    
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'info@daltonfloorgallery.com', // generated ethereal user
        pass: 'Atlanta@1140', // generated ethereal password
      },
    });

    // Format the email content
    const emailContent = `
      New Estimate Request:
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      
      Address:
      ${formData.address || 'Not provided'}
      ${formData.city || ''} ${formData.state || ''} ${formData.zip || ''}
      
      Preferred Date: ${formData.preferredDate || 'Not specified'}
      Preferred Time: ${formData.preferredTime || 'Not specified'}
      
      Products of Interest: ${formData.products.join(', ') || 'None selected'}
      
      Comments: ${formData.comments || 'No comments provided'}
      
      Keep me updated: ${formData.keepUpdated ? 'Yes' : 'No'}
    `;

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Dalton Floor Gallery" <info@daltonfloorgallery.com>',
      to: 'info@daltonfloorgallery.com',
      subject: `New Estimate Request from ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully',
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
