const { getWeather, translateText, currencyConvert, ipLookup } = require('../utils/api');
const { formatTime } = require('../utils/helpers');

async function handleUtilitas(message, body, args) {
    if (body === '/waktu') await message.reply(formatTime());
    if (body.startsWith('/cuaca ')) await message.reply(await getWeather(args.join(' ')));
    if (body.startsWith('/kalkulator ')) {
        try { await message.reply(eval(args.join(' '))); } catch { await message.reply('Ekspresi salah.'); }
    }
    if (body.startsWith('/translate ')) await message.reply(await translateText(args.slice(1).join(' '), args[0], 'id'));
    if (body.startsWith('/convert ')) await message.reply(await currencyConvert(parseFloat(args[0]), args[1], args[2]));
    if (body.startsWith('/ip ')) await message.reply(await ipLookup(args[0]));
    if (body === '/timezone') await message.reply(`Zona waktu: ${require('moment-timezone')().tz('Asia/Jakarta').format('Z')}`);
    if (body.startsWith('/remind ')) {
        const time = args[0];
        setTimeout(() => message.reply('Pengingat!'), parseInt(time) * 1000);
        await message.reply('Pengingat diatur.');
    }
    if (body === '/uptime') await message.reply(`Bot aktif sejak: ${process.uptime()} detik`);
    if (body.startsWith('/poll ')) await message.reply(`Poll dibuat: ${args.join(' ')} (Ya/Tidak)`);
    if (body === '/randomcolor') await message.reply(`Warna acak: #${Math.floor(Math.random()*16777215).toString(16)}`);
    if (body === '/password') await message.reply(`Password acak: ${Math.random().toString(36).substring(2, 15)}`);
}

module.exports = { handleUtilitas };
