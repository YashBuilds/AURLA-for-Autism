import { NextResponse } from 'next/server'
import { addToGoogleSheet } from '@/lib/googleSheets'

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, interest } = body
    
    if (!name || !email || !phone || !interest) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Add to Google Sheet
    await addToGoogleSheet(body)

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}