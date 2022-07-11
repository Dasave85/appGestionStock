const { mostrarMenu, pausa, insertarArticulo } = require("./helpers/inquirer");
const { Articulos } = require('./models/articulos')

const start = async () => {
    let opcion = ''
    const articulos = new Articulos();
    

do {
    const { opcion } = await mostrarMenu()
    
    switch ( opcion ){
        case '1': 
        const articulo = await insertarArticulo();
        console.log(articulo)
        const { ref, descripcion, precio } = articulo;
        articulos.crearArticulo(ref , descripcion, precio);

        break;
    }
    await pausa();

    } while ( opcion !== '0' ); 
}



start();