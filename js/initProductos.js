inicializarProductos();

function inicializarProductos() {
    obtenerDB();
    productos = []; // GLOBAL

    // Verifica si ya hay productos en el localStorage
    if (!localStorage.getItem("stock")) {
        // Si no hay productos, inicializa el arreglo base y lo guarda en el localStorage
        localStorage.setItem("stock", JSON.stringify(productos));
    }

    listaVehiculos = JSON.parse(localStorage.getItem('stock')); // GLOBAL

}

async function obtenerDB() {
    //* Trae los datos del archivo JSON.

    const URLJSON = '/DB.json';
    const respuesta = await (fetch(URLJSON));
    const data = await respuesta.json();
    const vehiculos = data.vehiculos;
    for (vehiculo of vehiculos) {
        productos.push(vehiculo);
    }
}

const reset = () => {
    //* Limpia el localStorage, luego le carga el arreglo productos y por ultimo renderiza la pagina (Deja el stock de vehiculos inicial)

    localStorage.removeItem('stock');
    localStorage.setItem("stock", JSON.stringify(productos));
    listaVehiculos = JSON.parse(localStorage.getItem('stock'));
    renderizar(listaVehiculos);
}

const resetDB = () => {
    //* Alerta (SweetAlert) -> Si: Reseta la DB

    Swal.fire({
        title: 'Seguro que desea resetera la base de datos?',
        showDenyButton: true,
        confirmButtonText: 'Resetear',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
            reset();
            Swal.fire('Resetado exitoso!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('No se han realizado cambios.', '', 'info')
        }
    })
}

