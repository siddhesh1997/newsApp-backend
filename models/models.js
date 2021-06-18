const mongoose = require('mongoose');


const news = mongoose.Schema({
    headlines: String,
    desc: String,
    image: String,
});

exports.news = mongoose.model('news',news)