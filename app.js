const { guardarDB } = require("./helpers/guardarDatos");
const { mostrarMenu, pausa } = require("./helpers/inquirer");
const { opciones } = require("./helpers/opciones");

const start = async () => {
  let opcion = "";

  do {
    opcion = await mostrarMenu();

    if (opcion > 0 && opcion < 7) {
      await opciones[opcion]();
    }

    const { listadoArticulos } = require("./helpers/opciones");
    guardarDB(listadoArticulos);

    await pausa();
  } while (opcion !== "0");
};

start();
