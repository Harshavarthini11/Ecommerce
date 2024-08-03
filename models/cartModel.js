const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    product: [{
        productId: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        }
    }]
});

const CartModel = mongoose.model('Cart', cartSchema);
module.exports = CartModel;