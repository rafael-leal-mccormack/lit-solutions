'use server'

import { Resend } from 'resend';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data: responseData, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: ["litsolutions305@gmail.com"],
      subject: "New message from " + data.name,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data: responseData };
  } catch (err) {
    return { success: false, error: 'Failed to send email' };
  }
} 