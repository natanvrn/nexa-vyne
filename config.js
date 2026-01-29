module.exports = {
    prefix: '/',
    apiKeys: {
        weather: process.env.WEATHER_API_KEY || 'YOUR_KEY',
        news: process.env.NEWS_API_KEY || 'YOUR_KEY',
        unsplash: process.env.UNSPLASH_ACCESS_KEY || 'YOUR_KEY',
        bitly: process.env.BITLY_API_KEY || 'YOUR_KEY',
        elevenlabs: process.env.ELEVENLABS_API_KEY || 'YOUR_KEY',
        ocr: process.env.OCR_API_KEY || 'YOUR_KEY'
    }
};
