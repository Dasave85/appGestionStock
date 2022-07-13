

const opciones = {
    '1': opt1 = () => {
        const datosArticulo = await insertarArticulo();        
        const { ref, descripcion, precio, stock } = datosArticulo;
        const articulo = new Articulo(ref , descripcion, precio, stock); 
    },

}