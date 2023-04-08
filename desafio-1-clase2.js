// DESAFIO
// ✓	Se creará una instancia de la clase “ProductManager”

// ✓	Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

// ✓	Se llamará al método “addProduct” con los campos:
            // -	title: “producto prueba”
            // -	description:”Este es un producto prueba”
            // -	price:200,
            // -	thumbnail:”Sin imagen”
            // -	code:”abc123”,
            // -	stock:25

// ✓	El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

// ✓	Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

// ✓	Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

// ✓	Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

class ProducManager {
    
    #products 

    constructor (){
        this.#products = []
    };

    getProducts () {
        return this.#products
    };

    getProductsById (id) {
        return this.#products.find((product) => product.id === id);
    };

    #areFieldComplete (title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Por favor, completa todos los campos.");
            return false; 
            
        } else { 
            return true; 
        };
    };

    #isNotDuplicate (code) {
        if(this.#products.find((product) => product.code === code) !== undefined){
            console.error("El codigo ya existe, posible producto duplicado.");
            return false;
        } else {
            return true;
        };
    };
    
    #idGenerator () {
        let id = 0;
        if(this.#products.length === 0){
            id = 1;
        } else {
            id = this.#products[this.#products.length-1].id + 1;
        };
        return id;
    };

    addProduct (title, description, price, thumbnail, code, stock) {
        
        if(this.#areFieldComplete(title, description, price, thumbnail, code, stock) && this.#isNotDuplicate(code)){
            const newProduct = {
                id: this.#idGenerator(),
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }
            this.#products.push(newProduct);
        };
    };
};

const productManager = new ProducManager();

productManager.addProduct("producto prueba 1", "Este es un producto prueba 1", 200, "Sin imagen", "abc121", 25);
productManager.addProduct("producto prueba 2", "Este es un producto prueba 1", 200, "Sin imagen", "abc122", 25);
productManager.addProduct("producto prueba 3", "Este es un producto prueba 1", 200, "Sin imagen", "abc122", 25);
productManager.addProduct("producto prueba 6", "Este es un producto prueba 1", 200, "Sin imagen", "abc126", 25);
productManager.addProduct("producto prueba 7", "Este es un producto prueba 1", 200, "Sin imagen", "abc127", 25);
productManager.addProduct("producto prueba 8", "Este es un producto prueba 1", 200, "Sin imagen", "abc128", 25);
productManager.addProduct("producto prueba 9", "Este es un producto prueba 1", 200, "Sin imagen", "abc129", 25);
productManager.addProduct("producto prueba 10", "Este es un producto prueba 1", 200, "Sin imagen", "abc1210", 25);


// Codigo repetido
productManager.addProduct("producto prueba 4", "Este es un producto prueba 1", 200, "Sin imagen", "abc124", 25);

// Sin todos los campos completos
productManager.addProduct("producto prueba 5", "Este es un producto prueba 1", 200, "Sin imagen", 25);





console.log(productManager.getProductsById(6))