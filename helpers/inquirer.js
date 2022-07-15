const inquirer = require("inquirer");
require("colors");

const mostrarMenu = async () => {
  const opciones = [
    {
      type: "list",
      name: "opcion",
      message: "Selecciona una opcion.",
      choices: [
        {
          value: "1",
          name: `${"1.".yellow} Insertar articulo`,
        },
        {
          value: "2",
          name: `${"2.".yellow} Buscar articulo`,
        },
        {
          value: "3",
          name: `${"3.".yellow} Listar articulos con stock`,
        },
        {
          value: "4",
          name: `${"4.".yellow} Listar articulos sin stock`,
        },
        {
          value: "5",
          name: `${"5.".yellow} Modificar stock`,
        },
        {
          value: "6",
          name: `${"6.".yellow} Borrar articulo(s)`,
        },
        {
          value: "0",
          name: `${"0.".yellow} Salir`,
        },
      ],
    },
  ];

  console.clear();
  console.log("----------------------------");
  console.log("     Gestion mercancias".yellow);
  console.log("----------------------------\n");

  const { opcion } = await inquirer.prompt(opciones);

  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} para continuar`,
    },
  ];

  console.log("\n");

  await inquirer.prompt(question);
};

const insertarArticulo = async () => {
  const valor1 = [
    {
      type: "input",
      name: "ref",
      message: "Introduce el numero de referencia",
    },
  ];
  const valor2 = [
    {
      type: "input",
      name: "descripcion",
      message: "Introduce la descripcion",
    },
  ];

  const valor3 = [
    {
      type: "input",
      name: "precio",
      message: "Introduce el precio",
      validate(value) {
        if (isNaN(value)) {
          return "Introduce un numero";
        }
        return true;
      },
    },
  ];

  const valor4 = [
    {
      type: "input",
      name: "stock",
      message: `Intoduce unidades disponibles o pulsa ${"enter".yellow}`,
      validate(value) {
        if (isNaN(value)) {
          return "Introduce un numero";
        }
        return true;
      },
    },
  ];

  const { ref } = await inquirer.prompt(valor1);
  const { descripcion } = await inquirer.prompt(valor2);
  let { precio } = await inquirer.prompt(valor3);
  let { stock } = await inquirer.prompt(valor4);
  precio = Number(precio);
  stock = Number(stock);
  if (!stock) {
    const articulo = { ref, descripcion, precio };
    return articulo;
  }

  const articulo = { ref, descripcion, precio, stock };
  return articulo;
};

const buscarArticulo = async () =>{
  const question = [
    {
        type: 'input',
        name: 'ref',
        message: 'Introduce el numero de referencia',
        validate( value ){
            if (value.length === 0){
                return 'Introduce un valor'
            }
            return true
        }
    }
  ];

  const ref = await inquirer.prompt(question);
  return ref;
}

const modificarStock = async () => {
    const question1 = [
        {
            type: 'list',
            name: 'operacion',
            message: 'Que accion quiere hacer',
            choices: [
                {
                    value: true,
                    name: 'Añadir Stock'
                },
                {
                    value: false,
                    name: 'Retirar Stock'
                }
            ]
        }
    ];

    const { operacion } = await inquirer.prompt(question1)

    const question2 = [
        {
            type: 'input',
            name:'cantidad',
            message: `Introduce la cantidad a ${operacion ? 'añadir' : 'retirar'}`,
            validate( value ){
              if (value.length === 0){
                  return 'Introduce un valor'
              }
              return true
          }
        }
    ]

    const { cantidad } = await inquirer.prompt(question2);
   
    return { operacion , cantidad }
}

module.exports = {
  mostrarMenu,
  pausa,
  insertarArticulo,
  buscarArticulo,
  modificarStock
};
