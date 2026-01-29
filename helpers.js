function isValidNumber(num) {
    return !isNaN(num);
}

function formatTime() {
    return require('moment-timezone')().tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY');
}

module.exports = { isValidNumber, formatTime };
