const { mostrarMenu, pausa, insertarArticulo } = require("./helpers/inquirer");
const { Articulo } = require("./models/articulo");


const start = async () => {
    let opcion = ''
    const listadoArticulos = [];
    

do {
    const { opcion } = await mostrarMenu()
    
    switch ( opcion ){
        case '1': 
            const datosArticulo = await insertarArticulo();        
            const { ref, descripcion, precio, stock } = datosArticulo;
            const articulo = new Articulo(ref , descripcion, precio, stock);      
            listadoArticulos.push(articulo)
            console.log('\nArticulo insertado'.white)

        break;

        case '2':

           console.table( listadoArticulos, ['ref', 'descripcion', 'precio', 'stock'] )
            
       
                
    }
    await pausa();

    } while ( opcion !== '0' ); 
}



start();