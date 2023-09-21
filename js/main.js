//? DOM - Pagina Principal
const btnAgregarVehiculo = document.getElementById('btnAgregarVehiculo');
const btnResetDB = document.getElementById('btnResetDB');
const btnLimpiarFiltros = document.getElementById('clearFiltersButton');
const btnVerFiltros = document.getElementById('btnVerFiltros');
const btnAgregar = document.getElementById('agregar');
const seccionProductos = document.getElementById('products');
const usuario = document.getElementById('usuario');


btnLimpiarFiltros.onclick = () => {
    renderizar(listaVehiculos);
    console.log('renderizando...')
}

btnResetDB.onclick = () => {
    resetDB();
}

// btnAgregarVehiculo.onclick = () => {
//     cargarVehiculo();
// }


function main() {
    renderizar(listaVehiculos);
    time();
    aviso();
}

main();


//TODO ---------------------------

//* Arreglar local Storage:
/*
    Al agregar un vehiculo nuevo, no permanece en el storage
    Creo que cada vez que se ejecuta el archivo "productos.js" se resetea el storage
*/

//TODO ---------------------- FIN 