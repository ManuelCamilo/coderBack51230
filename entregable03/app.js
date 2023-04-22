const ProductManager = require ('./ProductManager'); //forma vieja de importar - 

const express = require ('express');
const app = express()


//endpoint /products
app.get('/products', (request, response) => {
    limit = request.query.limit;    // query params
    const products = ProductManager.getProducts();
    const total = products.length

    if(limit && limit > total) {
        const message = `La cantidad limite de productos es ${total}`;
        const data = {
            message: message,
            products: products.slice(0,total) 
        }
            response.send(data)
    } else if (limit) {
        response.send(products.slice(0, limit));
    } else {
        response.send(products)
    }
    
});

//endpoint /product/:pid

app.get('/products/:pid', (request, response) => {
    const id = parseInt(request.params.pid);    // URL params
    const product = ProductManager.getProductById(id);
    if (product) {
        response.send(product);
    } else {
        response.send(`No se ha encontrado el producto con el id ${id}`)
    }
});



app.listen(8080, () => console.log('Server Up'))


