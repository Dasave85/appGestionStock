require("colors");
const { insertarArticulo, buscarArticulo, modificarStock } = require("./inquirer");
const { Articulo } = require("../models/articulo");
const { leerDB } = require("./guardarDatos");

let listadoArticulos = [];

listadoArticulos = leerDB();

const opciones = {
  1: async () => {
    const datosArticulo = await insertarArticulo();
    const { ref, descripcion, precio, stock } = datosArticulo;
    const articulo = new Articulo(ref, descripcion, precio, stock);
    listadoArticulos.push(articulo);
    console.log("\nArticulo insertado".white);
  },
  2: async () => {
    const { ref } = await buscarArticulo();
    
    const articulo = listadoArticulos.find( (articulo) => articulo.ref == ref);
     if ( articulo ){
      console.log(`
      ${'REFERENCIA: '.blue} ${articulo.ref}
      ${'DESCIPCION: '.blue} ${articulo.descripcion}
      ${'PRECIO: '.blue} ${articulo.precio}
      ${'STOCK: '.blue} ${articulo.stock}`)
      } else {
        console.log(`El articulo ${ref} no existe en la base de datos`)
      }
    },
  3: () => {
    const listadoStock = [];
    listadoArticulos.forEach((articulo) => {
      if (articulo.stock > 0) {
        listadoStock.push(articulo);
      }
    });
    console.table(listadoStock, ["ref", "descripcion", "precio", "stock"]);
  },
  4: () => {
    const listadoSinStock = [];
    listadoArticulos.forEach((articulo) => {
      if (articulo.stock === 0) {
        listadoSinStock.push(articulo);
      }
    });
    console.table(listadoSinStock, ["ref", "descripcion", "precio", "stock"]);
  },
  5: async () => {
    const { ref } = await buscarArticulo();
    const articulo = listadoArticulos.find( articulo => articulo.ref == ref);
    if( articulo ){
    console.table(articulo)
    const { operacion, cantidad } = await modificarStock()
     if ( operacion ) {
      articulo.stock += Number(cantidad)
     } else{
       if(cantidad > articulo.stock) {
        console.log( `\nNo se pueden retirar ${cantidad} unidades. Solo quedan ${ articulo.stock } unidades en el almacen`)
        return
       }
       articulo.stock -= Number(cantidad)
     } 
     console.table(articulo)
    } else {
      console.log(`El articulo ${ref} no existe en la base de datos`)
    }
  },
  6: async () => {
    const { ref } = await buscarArticulo();
    
    const articulo = listadoArticulos.find( (articulo) => articulo.ref == ref);
    if ( articulo ) {
      listadoArticulos.splice(articulo)
      console.log(`El articulo ${ articulo.ref } se ha eliminado de la base de datos.`)
      
    } else {
      console.log(`El articulo ${ref} no existe en la base de datos`)
    }
  }
};

module.exports = {
  opciones,
  listadoArticulos,
};
