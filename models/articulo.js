const { v4 } = require('uuid')

class Articulo{
    #id; #ref; #descripcion; #precio; #stock;

    constructor( ref, descripcion, precio, stock = 0 ){

        this.id = v4();
        this.ref = ref;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }

    set modificarStock( cantidad ){
        this.stock = this.stock + cantidad;
    }

};

module.exports = { Articulo };