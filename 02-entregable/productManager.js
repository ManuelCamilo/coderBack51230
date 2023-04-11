const fs = require('fs');

class ProductManager{
    constructor(path) {
        this.path = path
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, '[]')
        }
    }

    generateID = () => {
        const products = this.getProducts()
        if (products.length === 0) return 1
        return products[products.length-1].id +1
    }
    
    addProduct = (product) => {
        const products = this.getProducts()
        const id = this.generateID()
        const productoNuevo = {...product, id}
        products.push(newProduct)
        fs.writeFileSync(this.path, JSON.stringify(products))
        return productoNuevo
    }

    getProducts = () => {
        const carrito = fs.readFileSync(this.path, 'utf-8')
        return JSON.parse(carrito)    
    }

    getProductById = (id) => {
        const products = this.getProducts()
        const product = products.find((product) => product.id === id)
        return product
    } 

    updateProduct = (id, updatedFields) => {
    const products = this.getProducts()
    const index = products.findIndex((product) => product.id === id)
    if (index !== -1) {
        products [index] = {...products[index], ...updatedFields}
        fs.writeFileSync(this.path, JSON.stringify(products))
        return products [index]
        }
        return null
    }

    deleteProduct = (id) => {
        const products = this.getProducts()
        const index = products.findIndex((product) => product.id === id)
        if (index !== -1) {
          const deletedProduct = products.splice(index, 1)
          fs.writeFileSync(this.path, JSON.stringify(products))
          return deletedProduct[0]
        }
        return null
      }
}


const item = new ProductManager('./productos.txt')
const primerProducto = {
    title: 'Osito teddy',
    description:'oso peluche teddy 3% algodón',
    price: 8400,
    thumbnail: 'none',
    code: 001,
    stock: 10,
}
// ('Espada samuray', 'espada antigua real autografeada 300 A.C.', 95400, 'none', 002, 1)
// ('Desodorante AXE', 'desodorante axe fragancia chocolate irresistible', 699, 'none', 003, 80)

const agregarProducto = ProductManager.addProduct(primerProducto)
console.log(agregarProducto)

const actualizarProducto = ProductManager.updateProduct(1, {
    price: 10000,
})
console.log (actualizarProducto)

const eliminarProducto = ProductManager.deleteProduct(1)
console.log(eliminarProducto)

const products = ProductManager.getProducts()
console.log(products)