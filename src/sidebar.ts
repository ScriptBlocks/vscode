// src/sidebar.ts
export function getWebviewContent(): string {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Python Sidebar</title>
        </head>
        <body>
            <h1>Welcome to the Python Sidebar</h1>
            <p>This is a custom sidebar for Python files.</p>
        </body>
        </html>
    `;
}