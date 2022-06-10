const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name: String,
    row: Number,
    floors: Number,
    position: Number,
    description: String,
});
const KhoHang = mongoose.model('KhoHang', Schema);
module.exports = KhoHang;
