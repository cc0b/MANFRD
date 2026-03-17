'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const contact = formData.get('contact') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  if (!name || !contact || !message) {
    return { error: 'Please fill in all required fields.' }
  }

  try {
    await resend.emails.send({
      from: 'MANFRD Contact <onboarding@resend.dev>',
      to: 'contact@manfrd.co.nz',
      subject: `New enquiry from ${name} — ${service}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email / Phone:</strong> ${contact}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })
    return { success: true }
  } catch {
    return { error: 'Failed to send. Please try again.' }
  }
}
