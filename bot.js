const { Client, MessageMedia } = require('whatsapp-web.js');
const moment = require('moment-timezone');
const cron = require('node-cron');
const sharp = require('sharp');

// Import dari folder
const config = require('./config/config');
const { handleIntro } = require('./features/intro');
const { handleUtilitas } = require('./features/utilitas');
const { handleHiburan } = require('./features/hiburan');
const { handleGrup } = require('./features/grup');
const { handleIntegrasi } = require('./features/integrasi');
const { handleMisc } = require('./features/misc');

// Konfigurasi Client dengan Puppeteer untuk Railway (headless, skip download jika perlu)
const client = new Client({
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',  // TAMBAHAN: Untuk Railway
            '--disable-gpu'
        ],
        executablePath: process.env.PUPPETEER_SKIP_CHROMIUM_DOWNLOAD ? undefined : undefined  // Gunakan default
    },
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html'
    }
});

// Error handling untuk debug
client.on('error', (error) => {
    console.error('Client Error:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

client.on('pairing_code', (pairingCode) => {
    console.log(`
    ╔══════════════════════════════════════════════╗
    ║              🔗 PAIRING CODE LOGIN           ║
    ║              Masukkan kode ini di WhatsApp: ║
    ║              ${pairingCode}                  ║
    ║              (Pengaturan > Perangkat Tertaut)║
    ╚══════════════════════════════════════════════╝
    `);
});

client.on('ready', () => {
    console.log(`
    ╔══════════════════════════════════════════════╗
    ║              🤖 BOT WHATSAPP CANGGIH         ║
    ║              Versi 2.0 - 100 Fitur           ║
    ║              Siap Digunakan! 🚀              ║
    ╚══════════════════════════════════════════════╝
    `);
});

client.on('message', async (message) => {
    try {
        const body = message.body.toLowerCase();
        const args = body.split(' ').slice(1);

        // Urutan Handler
        await handleIntro(message, body);
        await handleUtilitas(message, body, args);
        await handleHiburan(message, body, args);
        await handleGrup(message, body, args);
        await handleIntegrasi(message, body, args);
        await handleMisc(message, body, args);
    } catch (error) {
        console.error('Message Handler Error:', error);
        await message.reply('Terjadi error, coba lagi nanti.');
    }
});

// Initialize dengan try-catch
try {
    client.initialize();
} catch (error) {
    console.error('Initialization Error:', error);
}
