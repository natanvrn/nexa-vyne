const { randomJoke, randomFact } = require('../utils/api');

async function handleHiburan(message, body, args) {
    if (body === '/dadu') await message.reply(`Angka dadu: ${Math.floor(Math.random() * 6) + 1}`);
    if (body === '/koin') await message.reply(Math.random() < 0.5 ? 'Kepala' : 'Ekor');
    if (body === '/rps') await message.reply(['Batu', 'Kertas', 'Gunting'][Math.floor(Math.random() * 3)]);
    if (body === '/trivia') await message.reply('Trivia: Apa ibu kota Indonesia? (Jawab: Jakarta)');
    if (body === '/meme') await message.reply('Meme: [Kirim gambar meme sederhana]');
    if (body === '/quote') await message.reply('"Keberhasilan adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan." - Colin Powell');
    if (body === '/horoscope') await message.reply('Horoskop: Anda akan beruntung hari ini!');
    if (body === '/fortune') await message.reply('Fortune cookie: Kesuksesan menanti Anda.');
    if (body === '/story') await message.reply('Cerita pendek: Ada seekor kucing yang...');
    if (body === '/puzzle') await message.reply('Teka-teki: Apa yang selalu datang tapi tidak pernah tiba? (Jawab: Besok)');
    if (body === '/joke2') await message.reply(await randomJoke());
    if (body === '/fact2') await message.reply(await randomFact());
}

module.exports = { handleHiburan };
