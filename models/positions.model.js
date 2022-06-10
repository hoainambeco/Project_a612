const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hoainambeco:01684490544Fe@cluster0.f6gva.mongodb.net/Agile').then(function () {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log('Error: ', e);
});
const positionSchema = new mongoose.Schema({
    idWarehouse: String,
    namePosition: String,
    status: String,
});
const positionWarehouse = mongoose.model('positionWarehouses', positionSchema);
module.exports = positionWarehouse;
