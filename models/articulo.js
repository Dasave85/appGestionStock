const { v4 } = require('uuid')

class Articulo{
   

    constructor( ref, descripcion, precio, stock = 0 ){

        this.id = v4();
        this.ref = ref;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }


};

module.exports = { Articulo };