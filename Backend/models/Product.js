const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
    
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    desc_short: {
        type: Array,
        required: true
    },
    cover_img: {
        type: String,
        required: true
    },
    img_list: {
        type: Array,
        required: true
    },
    desc_long: {
        type: Object,
        required: true
    },
    specification: {
        type: Object,
        required: true
    }


});

module.exports = mongoose.model('Product', ProductSchema);