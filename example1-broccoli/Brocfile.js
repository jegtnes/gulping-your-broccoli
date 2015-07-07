var sass = require('broccoli-sass');

module.exports = sass(['scss/'], 'app.scss', 'css/app.css');
