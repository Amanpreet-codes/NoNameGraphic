import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['nonamegraphic1@gmail.com'],
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1f1f1f; color: white; padding: 20px; border-radius: 8px;">
            <h1 style="color: #dc2626; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h1>
            
            <div style="background-color: #2d2d2d; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h2 style="color: #dc2626; margin-top: 0;">Customer Information</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #dc2626;">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Service Interested In:</strong> ${service}</p>
            </div>

            <div style="background-color: #2d2d2d; padding: 20px; border-radius: 6px;">
              <h2 style="color: #dc2626; margin-top: 0;">Message</h2>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #444;">
              <p style="color: #999; font-size: 14px;">
                Submitted on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
