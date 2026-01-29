const axios = require('axios');
const config = require('../config/config');

async function getWeather(city) {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKeys.weather}&units=metric`);
        return `Cuaca di ${city}: ${res.data.weather[0].description}, Suhu: ${res.data.main.temp}°C`;
    } catch { return 'Kota tidak ditemukan.'; }
}

async function getNews() {
    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${config.apiKeys.news}`);
        return res.data.articles.slice(0, 3).map(a => `${a.title} - ${a.url}`).join('\n');
    } catch { return 'Gagal mengambil berita.'; }
}

async function getRandomImage() {
    try {
        const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=${config.apiKeys.unsplash}`);
        return res.data.urls.regular;
    } catch { return 'Gagal mengambil gambar.'; }
}

async function shortenUrl(url) {
    try {
        const res = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        return res.data;
    } catch { return 'Gagal memendekkan URL.'; }
}

async function translateText(text, from = 'en', to = 'id') {
    try {
        const res = await axios.post('https://libretranslate.com/translate', { q: text, source: from, target: to });
        return res.data.translatedText;
    } catch { return 'Gagal menerjemahkan.'; }
}

async function textToSpeech(text) {
    try {
        const res = await axios.post(`https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM`, {
            text: text, voice_settings: { stability: 0.5, similarity_boost: 0.5 }
        }, {
            headers: { 'xi-api-key': config.apiKeys.elevenlabs, 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
        return Buffer.from(res.data).toString('base64');
    } catch { return null; }
}

async function ocrImage(mediaData) {
    try {
        const res = await axios.post('https://api.ocr.space/parse/image', {
            apikey: config.apiKeys.ocr,
            base64Image: `data:image/png;base64,${mediaData}`,
            language: 'eng'
        });
        return res.data.ParsedResults[0].ParsedText || 'Tidak ada teks ditemukan.';
    } catch { return 'Gagal melakukan OCR.'; }
}

async function wikiSearch(query) {
    try {
        const res = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        return `${res.data.title}: ${res.data.extract}`;
    } catch { return 'Artikel tidak ditemukan.'; }
}

async function randomJoke() {
    try {
        const res = await axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
        return res.data.joke;
    } catch { return 'Gagal mengambil joke.'; }
}

async function randomFact() {
    try {
        const res = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        return res.data.text;
    } catch { return 'Gagal mengambil fakta.'; }
}

async function currencyConvert(amount, from, to) {
    try {
        const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const rate = res.data.rates[to];
        return `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`;
    } catch { return 'Konversi gagal.'; }
}

async function ipLookup(ip) {
    try {
        const res = await axios.get(`https://ipapi.co/${ip}/json/`);
        return `IP: ${ip}, Lokasi: ${res.data.city}, ${res.data.country_name}`;
    } catch { return 'IP tidak valid.'; }
}

module.exports = { getWeather, getNews, getRandomImage, shortenUrl, translateText, textToSpeech, ocrImage, wikiSearch, randomJoke, randomFact, currencyConvert, ipLookup };const axios = require('axios');
const config = require('../config/config');

async function getWeather(city) {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKeys.weather}&units=metric`);
        return `Cuaca di ${city}: ${res.data.weather[0].description}, Suhu: ${res.data.main.temp}°C`;
    } catch { return 'Kota tidak ditemukan.'; }
}

async function getNews() {
    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${config.apiKeys.news}`);
        return res.data.articles.slice(0, 3).map(a => `${a.title} - ${a.url}`).join('\n');
    } catch { return 'Gagal mengambil berita.'; }
}

async function getRandomImage() {
    try {
        const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=${config.apiKeys.unsplash}`);
        return res.data.urls.regular;
    } catch { return 'Gagal mengambil gambar.'; }
}

async function shortenUrl(url) {
    try {
        const res = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        return res.data;
    } catch { return 'Gagal memendekkan URL.'; }
}

async function translateText(text, from = 'en', to = 'id') {
    try {
        const res = await axios.post('https://libretranslate.com/translate', { q: text, source: from, target: to });
        return res.data.translatedText;
    } catch { return 'Gagal menerjemahkan.'; }
}

async function textToSpeech(text) {
    try {
        const res = await axios.post(`https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM`, {
            text: text, voice_settings: { stability: 0.5, similarity_boost: 0.5 }
        }, {
            headers: { 'xi-api-key': config.apiKeys.elevenlabs, 'Content-Type': 'application/json' },
            responseType: 'arraybuffer'
        });
        return Buffer.from(res.data).toString('base64');
    } catch { return null; }
}

async function ocrImage(mediaData) {
    try {
        const res = await axios.post('https://api.ocr.space/parse/image', {
            apikey: config.apiKeys.ocr,
            base64Image: `data:image/png;base64,${mediaData}`,
            language: 'eng'
        });
        return res.data.ParsedResults[0].ParsedText || 'Tidak ada teks ditemukan.';
    } catch { return 'Gagal melakukan OCR.'; }
}

async function wikiSearch(query) {
    try {
        const res = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        return `${res.data.title}: ${res.data.extract}`;
    } catch { return 'Artikel tidak ditemukan.'; }
}

async function randomJoke() {
    try {
        const res = await axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
        return res.data.joke;
    } catch { return 'Gagal mengambil joke.'; }
}

async function randomFact() {
    try {
        const res = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        return res.data.text;
    } catch { return 'Gagal mengambil fakta.'; }
}

async function currencyConvert(amount, from, to) {
    try {
        const res = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const rate = res.data.rates[to];
        return `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`;
    } catch { return 'Konversi gagal.'; }
}

async function ipLookup(ip) {
    try {
        const res = await axios.get(`https://ipapi.co/${ip}/json/`);
        return `IP: ${ip}, Lokasi: ${res.data.city}, ${res.data.country_name}`;
    } catch { return 'IP tidak valid.'; }
}

module.exports = { getWeather, getNews, getRandomImage, shortenUrl, translateText, textToSpeech, ocrImage, wikiSearch, randomJoke, randomFact, currencyConvert, ipLookup };
