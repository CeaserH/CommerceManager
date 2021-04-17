const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, unique: true},
    qty: {type: Number, required: true, minlength: 1},
    price: {type: Number, required: true, minlength: 3}
});

mongoose.model("Product", ProductSchema);