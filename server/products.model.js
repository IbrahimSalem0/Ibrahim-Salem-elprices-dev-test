const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema({
    name: String,
    image: String,
    price: Number,
    category: {
        id: ObjectId,
        name: String,
    },
    brand: String,
});

module.exports = mongoose.model('Products', product);