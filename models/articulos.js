const { Articulo } = require('./articulo')

class Articulos{
    #listado;

    constructor(){

        this.#listado = {}
    }

    crearArticulo(ref, descripcion, precio){
        const articulo = new Articulo(ref, descripcion, precio);
        console.log(articulo)
        this.#listado[articulo.id] = articulo;
    }
}

module.exports = { Articulos }