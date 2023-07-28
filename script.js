function shortenUrl() {
    const originalUrl = document.getElementById('urlInput').value;
    if (!originalUrl) return;

    const shortenedUrl = `http://your-domain.com/${generateShortCode()}`;
    document.getElementById('shortenedUrl').innerText = shortenedUrl;
}

function generateShortCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 7;
    let shortCode = '';
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortCode += characters[randomIndex];
    }
    return shortCode;
}