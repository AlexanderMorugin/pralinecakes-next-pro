
import { ReactNode } from 'react';
import { Resend } from 'resend';

export const sendEmail = async (to: string, subject: string, template: ReactNode) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject,
    react: template,
  });
  if (error) {
    throw error;
  }

  return data;
};
