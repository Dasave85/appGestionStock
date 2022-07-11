const inquirer = require('inquirer');
require('colors');

const mostrarMenu = async () => {

    const opciones = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Selecciona una opcion.',
            choices: [
                {
                    value: '1',
                    name: `${ '1.'.yellow } Insertar articulo`
                },
                {
                    value: '2',
                    name: `${ '2.'.yellow } Listar articulos`
                },
                {
                    value: '3',
                    name: `${ '3.'.yellow } Listar articulos con stock`
                },
                {
                    value: '4',
                    name: `${ '4.'.yellow } Listar articulos sin stock`
                },
                {
                    value: '5',
                    name: `${ '5.'.yellow } Modificar stock`
                },
                {
                    value: '6',
                    name: `${ '6.'.yellow } Borrar articulo(s)`
                },
                {
                    value: '0',
                    name: `${ '0.'.yellow } Salir`
                }
            ]
        }
    ];


    console.clear();
    console.log('----------------------------');
    console.log('     Gestion mercancias'.yellow)
    console.log('----------------------------\n');

    const opcion = await inquirer.prompt(opciones)

    return opcion;

}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presiona ${ 'enter'.yellow } para continuar`,

        }
    ];

    console.log('\n');
    
    await inquirer.prompt(question);
}

const insertarArticulo = async () => {
    const valor1 = [
        {
            type: 'input',
            name: 'ref',
            message: 'Introduce el numero de referencia'
        }
    ];
    const valor2 = [
        {
            type: 'input',
            name: 'descripcion',
            message: 'Introduce la descripcion'
        }
    ];

    const valor3 = [
        {
            type: 'input',
            name: 'precio',
            message: 'Introduce el precio'
        }
    ];

    const { ref } = await inquirer.prompt(valor1);
    const { descripcion } = await inquirer.prompt(valor2);
    const { precio } = await inquirer.prompt(valor3);
    
    const articulo = { ref, descripcion, precio };
    return articulo;
}


module.exports = {
    mostrarMenu,
    pausa, 
    insertarArticulo
}