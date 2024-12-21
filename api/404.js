export default function handler(req, res) {
    const acceptHeader = req.headers['accept'];

    const isBrowserRequest = acceptHeader && acceptHeader.includes('text/html');

    if (isBrowserRequest) {
        res.status(404).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Page Not Found</title>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body { font-family: 'Arial', sans-serif; background-color: #f7f7f7; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column; color: #333; line-height: 1.6; text-align: center; padding: 20px; }
                    h1 { font-size: 3rem; color: #333; margin-bottom: 20px; font-weight: 700; }
                    p { font-size: 1.1rem; color: #777; max-width: 600px; margin: 0 auto; }
                    @media (max-width: 600px) { h1 { font-size: 2.5rem; } p { font-size: 1rem; } }
                </style>
            </head>
            <body>
                <h1>The page you’re looking for can’t be found.</h1>
                <p>The requested URL <strong>${req.url}</strong> was not found on this server.</p>
            </body>
            </html>
        `);
    } else {
        res.status(404).json({ message: "404" });
    }
}
