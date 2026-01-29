function getIntroMessage() {
    return `
🤖 *SELAMAT DATANG DI BOT WHATSAPP CANGGIH & MODERN* 🤖

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ *Fitur Utama (100+ Total):*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 *Utilitas:* /waktu, /cuaca [kota], /kalkulator [ekspresi], /translate [teks]
📰 *Informasi:* /news, /wiki [query], /fact, /joke
🎮 *Hiburan:* /dadu, /koin, /rps, /trivia, /meme
👥 *Grup Admin:* /kick @user, /mute, /info, /tagall
🔧 *Lanjutan:* /ocr (kirim gambar), /convert [uang], /ip [alamat], /voice [teks]
💡 *AI & Integrasi:* /ai (placeholder), /image, /shorten [url], /qr [teks]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 *Cara Pakai:* Ketik /help untuk daftar lengkap.
📞 *Support:* Kirim /feedback untuk saran.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*Bot ini gratis & open-source. Gunakan bijak! ⚡*
    `;
}

async function handleIntro(message, body) {
    if (body === '/start' || body === '/menu') {
        await message.reply(getIntroMessage());
    }
}

module.exports = { handleIntro };
