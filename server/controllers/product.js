const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {

    index: (req, res) => {
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    edit: (req, res) => {
        Product.updateOne({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    view: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    delete: (req, res) => {
        Product.findByIdAndRemove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
