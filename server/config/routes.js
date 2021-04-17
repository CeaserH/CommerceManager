const Product = require("./../controllers/product")

module.exports = function(app){
    app.get("/", (req, res) => {
        res.redirect("/products")
    });
    app.get("/products", Product.index);
    app.get("/products/:id", Product.view);
    app.put("/products/update/:id", Product.edit);
    app.post("/products/new", Product.create);
    app.delete("/products/:id", Product.delete);
}