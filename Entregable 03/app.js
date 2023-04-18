const ProductManager = require ('./ProductManager');

const express = require ('express');
const app = express()

// const item = new ProductManager('./products.txt')

//endpoint /products
app.get('/products', (request, response) => {
    limit = request.query.limit;    // query param limit
    const products = ProductManager.getProducts();

    if(limit) {
        response.send(products.slice(0, limit));
    } else {
        response.send(products);
    }
});

//endpoint /product/:pid

app.get('/products/:pid', (request, response) => {
    const id = parseInt(request.params.pid);
    const product = ProductManager.getProductById(id);

    if (product) {
        response.send(product);
    } else {
        response.send(`No se ha encontrado el producto con el id ${id}`)
    }
});

app.listen(8080, () => console.log('server up'))