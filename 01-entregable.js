class ProductManager{
    constructor() {
        this.products = []
    }

    generateID = () => {
        if (this.products.length === 0) return 1
        return this.products[this.products.length-1].id +1
    }
    
    getProducts = () => {
        return this.products
    }
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.generateID()
        const product = {id, title, description, price, thumbnail, code, stock}
        //validación todos los campos son obligatorios.
        if ( !title || !description || !price || !thumbnail || !code || !stock) {
            return console.log('Faltan datos para agregar el producto')
        }
        
        // Validación codigo método some().
        const serial = this.products.some(product => product.code === code)
        if (serial) {
            return console.log(`Ya hay un producto agregado con el código "${code}"` )
        }

        this.products.push(product)
        return console.log('Producto agregado')
    }
    getProductById = (id) => {
        const product = this.products.find(product => product.id === id)
        if (!product) {
            return console.log(`No se encuentra el producto con el id ${id}`)
        }
        return product
    }
}


const item = new ProductManager()
item.addProduct('Osito teddy', 'oso peluche teddy 3% algodón', 8400, 'none', 001, 10)
item.addProduct('Espada samuray', 'espada antigua real autografeada 300 A.C.', 95400, 'none', 002, 1)
item.addProduct('Desodorante AXE', 'desodorante axe fragancia chocolate irresistible', 699, 'none', 003, 80)
item.addProduct('Notebook Azus i8', 'computadora original %100.', 240000, 'none', 003, 2)
item.addProduct('Sanguche mila', 'Sanguche de mila de pollo o carne a elección sin fritas', 900, 'none', 003,)
console.log(item.products)



console.log(item.getProductById(2))
console.log(item.getProductById(10))