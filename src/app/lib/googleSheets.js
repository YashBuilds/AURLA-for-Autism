import { google } from 'googleapis'

export async function addToGoogleSheet(data) {
  try {
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Format the data as a row
    const row = [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.childAge || 'Not specified',
      data.interest,
      data.message || 'No message',
    ]

    // Append the row to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G', // Adjust sheet name if needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Error adding to Google Sheet:', error)
    throw error
  }
}