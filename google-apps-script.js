/* ═══════════════════════════════════════════════════════════
   NueEra Contact Form → Google Sheets Integration
   ═══════════════════════════════════════════════════════════

   SETUP STEPS:
   1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Y0OXMvkwEHm6kyyB-jdqWI6BtbLET-UTlGfOfcnrMiw/edit
   2. Go to Extensions → Apps Script
   3. DELETE any existing code in the editor
   4. PASTE this entire file content
   5. Click "Deploy" → "New deployment"
   6. Set type: "Web app"
   7. Execute as: "Me" (your email)
   8. Who has access: "Anyone"
   9. Click "Deploy" → Copy the Web App URL
   10. Add the URL to your Vercel/Next.js env as: GOOGLE_SHEETS_WEBHOOK_URL
   ═══════════════════════════════════════════════════════════ */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // If sheet is empty, add headers first
    var lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Company',
        'Service',
        'Budget (INR)',
        'Timeline',
        'Source',
        'Message',
        'IP Address',
        'Status'
      ]);
      // Bold & style the header row
      var headerRange = sheet.getRange(1, 1, 1, 12);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }

    // Parse incoming data
    var data = JSON.parse(e.postData.contents);

    // Append row
    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.service || '',
      data.budget || '',
      data.timeline || '',
      data.source || '',
      data.message || '',
      data.ip || '',
      'New'
    ]);

    // Auto-resize columns for readability
    for (var i = 1; i <= 12; i++) {
      sheet.autoResizeColumn(i);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Row added to sheet' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for web app deployment
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'NueEra Contact Form Webhook is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
