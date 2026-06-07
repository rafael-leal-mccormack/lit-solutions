'use server'

import { Resend } from 'resend';
import { getPostHogClient } from '@/lib/posthog-server';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
  const posthog = getPostHogClient();

  try {
    const { data: responseData, error } = await resend.emails.send({
      from: "Lit Solutions <contact@litsolutions-llc.com>",
      to: ["rafael@litsolutions.dev"],
      subject: "New inquiry from " + data.name,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (error) {
      posthog.capture({
        distinctId: data.email,
        event: 'contact_email_failed',
        properties: { error: error.message, sender_email: data.email },
      });
      return { success: false, error: error.message };
    }

    posthog.capture({
      distinctId: data.email,
      event: 'contact_email_sent',
      properties: { sender_email: data.email, sender_name: data.name },
    });
    return { success: true, data: responseData };
  } catch (err) {
    posthog.capture({
      distinctId: data.email,
      event: 'contact_email_failed',
      properties: { error: 'exception', sender_email: data.email },
    });
    return { success: false, error: 'Failed to send email' };
  }
} 