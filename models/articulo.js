const { v4 } = require('uuid')

class Articulo{
    #id; #ref; #descripcion; #precio;

    constructor( ref, descripcion, precio ){

        this.id = v4();
        this.ref = ref;
        this.descripcion = descripcion;
        this.precio = precio;
    }

};

module.exports = { Articulo };