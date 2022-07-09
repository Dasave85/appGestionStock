const { mostrarMenu, pausa } = require("./helpers/inquirer");


const start = async () => {
    let opcion = ''
    
    do {
    const opcion = await mostrarMenu()
    console.log( opcion );

    await pausa();

    } while ( opcion !== '0' );
}

start();