/*
// Uso de date
let hoy = new Date().getDay();
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
alert(`Hoy es ${dias[hoy - 1]}`);
*/




//? DOM - Pagina Principal
// Renderizado de los Productos.
const seccionProductos = document.getElementById('products');
const btnAgregar = document.getElementById('agregar');
const btnLimpiarFiltros = document.getElementById('clearFiltersButton')

btnLimpiarFiltros.addEventListener('click', () => {
    renderizar(listaVehiculos);
    console.log('renderizando...')
})

// Renderiza todos los vehiculos que esten en el Array ("stock");
function renderizar(listaVehiculos) {
    seccionProductos.innerHTML = '';  // Limpia los productos previamente.
    for (const vehiculo of listaVehiculos) {
        seccionProductos.innerHTML += `
        <div class="product" id="${vehiculo.id}">
            <a href="auto1.html">
              <img
                src="${vehiculo.foto}"
                alt="Producto ${vehiculo.marca} ${vehiculo.modelo}"
                class="product-image"
              />
                <h3>$${vehiculo.precio}</h3>
                <p>${vehiculo.marca} ${vehiculo.modelo}</p>
                <p>${vehiculo.hp} hp</p>
                <p>${vehiculo.estado} <small class="text-body-secondary">${vehiculo.km}km </small></p>
            </a>
        </div>
        `;
    }
}

// Limpiar Pantalla -> Limpia la pantalla para vovler a renderizar con los nuevos vehiculos cargados;
function limpiar() {
    seccionProductos.innerHTML = '';
}

// Carga por defecto los vehiculos en stock
renderizar(listaVehiculos);



// ----------------------------------------- Fin DOM ->

//? FUNCIONES FILTRO ---------------------------->
const configFiltro = () => {
    alert(' -- Configurar Filtro -- \n Presione [ENTER] para no aplicar el campo en la busqueda... ')
    marca = prompt('Ingrese la Marca: ');
    modelo = prompt('Ingrese el Modelo: ');
    traccion = prompt('Ingrese el tipo de Tracción: \nTrasera \nDelantera \nTotal');
    anio = prompt('Ingrese el Año: ');
    precioMax = prompt('Ingrese el precio Máximo: ');
    precioMin = prompt('Ingrese el precio Mínimo: ');
    estado = prompt('Ingrese el estado: \nNuevo \nUsado - Como nuevo \nUsado - Buen estado \nUsado - Aceptable');

    const filtro = {
        marca: marca.toLowerCase(),
        modelo: modelo.toLowerCase(),
        traccion: traccion.toLowerCase(),
        anio: anio.toLowerCase(),
        precioMax: precioMax.toLowerCase(),
        precioMin: precioMin.toLowerCase(),
        estado: estado.toLowerCase()
    };


    console.table(filtro);
    alert('Filtros establecidos con exito...');

    // Limpia la pantalla principal, para que cuando presiones la opcion "2 - buscar" y luego "s - salir" y "s-salir" nuevamente, 
    // se aplique el filtro efectivaemente en la pagina (DOM)
    seccionProductos.innerHTML = '';
    return filtro;
}

function filtrar(filtros = {}) {
    console.log(filtros);
    if (Object.keys(filtros).length === 0) {
        // Si los filtros estan vacios, retorna todos los vehiculos
        console.table(listaVehiculos);
        return listaVehiculos;
    }
    const vehiculosFiltrados = listaVehiculos.filter(vehiculo => {
        return (
            (filtros.marca === '' || vehiculo.marca.toLowerCase().includes(filtros.marca.toLowerCase())) &&
            (filtros.modelo === '' || vehiculo.modelo.toLowerCase().includes(filtros.modelo.toLowerCase())) &&
            (filtros.traccion === '' || vehiculo.traccion.toLowerCase().includes(filtros.traccion.toLowerCase())) &&
            (filtros.anio === '' || parseInt(vehiculo.anio) >= parseInt(filtros.anio)) &&
            (filtros.estado === '' || vehiculo.estado.toLowerCase().includes(filtros.estado.toLowerCase())) &&
            (filtros.precioMax === '' || parseInt(vehiculo.precio) <= parseInt(filtros.precioMax)) &&
            (filtros.precioMin === '' || parseInt(vehiculo.precio) >= parseInt(filtros.precioMin))
        );
    });
    console.table(vehiculosFiltrados);

    // Muestra los vehiculos filtrados en pantalla (Tenes que salir con s-salir, de los dos menus para que se muestre).s
    renderizar(vehiculosFiltrados);

}


const verFiltros = (filtros) => {
    // Muestra los filtros que estan activos.
    console.log(' - FILTROS ACTIVOS -');
    if (filtros == undefined) {
        console.log('No hay filtros aplicados');
    } else {
        console.table(filtros);
    }
}
// FIN FUNCIONES FILTRO <!---------------------------

//? FUNCIONES MENU PRINCIPAL ----------------------------------->
const cargarVehiculo = () => {
    alert('-- CARGAR DATOS DEL VEHICULO --');
    let marca = prompt('Ingrese la Marca: ');
    let modelo = prompt('Ingrese el modelo: ');
    let traccion = prompt('Ingrese el tipo de Traccion: ');
    let hp = parseInt(prompt('Ingrese los HP: '));
    let anio = parseInt(prompt('Ingrese el Año: '));
    let precio = parseFloat(prompt('Ingrese el precio: $'));
    let estado = prompt('Ingrese el Estado: ');
    let km = prompt('Ingrese los Km: ');
    let foto = prompt('Ingrese la url de la imagen: ');

    const vehiculo = new Vehiculo(marca, modelo, traccion, hp, anio, precio, estado, km, foto);
    listaVehiculos.push(vehiculo); // Agregamos a la lista total de Vehiculos.
    limpiar();
    renderizar(listaVehiculos);
    console.log('\n');
    return vehiculo;
}

const buscarVehiculoId = (listaVehiculos) => {
    encontrado = false;
    alert('-- BUSCAR VEHICULO --');
    let id = parseInt(prompt('Ingrese el ID del vehiculo'));
    const resultadoBusquedaId = listaVehiculos.find(vehiculo => vehiculo.id === id);
    if (resultadoBusquedaId == undefined) {
        alert('Ningun vehiculo con ID: ' + "'" + id + "'");
    } else {
        resultadoBusquedaId.mostrarVehiculo();
    }
}


const filtrarVehiculos = () => {
    let filtros;
    const mensaje =
        (
            '-- FILTRAR VEHICULOS --' + '\n' +
            '1 - Configurar filtro' + '\n' +
            '2 - Buscar ' + '\n' +
            '3 - Ver filtros activos ' + '\n' +
            'S - Salir'
        );


    let opcion = prompt(mensaje);
    while (opcion.toLowerCase() != 's') {
        switch (opcion) {
            case '1':
                filtros = configFiltro();
                break;
            case '2':
                filtrar(filtros);
                break;
            case '3':
                verFiltros(filtros);
            default:
                break;
        }
        opcion = (prompt(mensaje));
    }



}

const mostrarTodosLosVehiculos = () => {
    if (listaVehiculos.length != 0) {
        let todosLosVehiculos = '-- LISTANDO TODOS LOS VEHICULOS --\n';
        for (const vehiculo of listaVehiculos) {
            todosLosVehiculos += (
                '-- VEHICULO ' + vehiculo.id + ' -- ' + '\n' +
                'Marca: ' + vehiculo.marca + '\n' +
                'Modelo: ' + vehiculo.modelo + '\n' +
                'Traccion: ' + vehiculo.traccion + '\n' +
                'Anio: ' + vehiculo.anio + '\n' +
                'Hp: ' + vehiculo.hp + '\n' +
                'Estado: ' + vehiculo.estado + '\n' +
                'Precio: ' + '$' + vehiculo.precio + '\n' +
                '----------------' + '\n');
        }
        alert(todosLosVehiculos);
        console.log(todosLosVehiculos);
    } else {
        alert('No hay vehiculos cargados');
    }
}

// FIN FUNCIONES MENU <!----------------------------------->

//? MENU PRINCIPAL -->
const mensaje =
    (
        '-- MENU PRINCIPAL --' + '\n' +
        '1 - Cargar un nuevo vehiculo' + '\n' +
        '2 - Buscar un vehiculo por id ' + '\n' +
        '3 - Filtrar vehiculos' + '\n' +
        '4 - Modificar datos de un vehiculo' + '\n' +
        '5 - Ver todos los vehiculos' + '\n' +
        'S - Salir'
    );


let opcion = (prompt(mensaje));
while (opcion.toLowerCase() != 's') {
    switch (opcion) {
        case '1':
            vehiculo = cargarVehiculo();
            break;
        case '2':
            if (listaVehiculos.length != 0) {
                buscarVehiculoId(listaVehiculos);
            } else {
                opc = prompt('ERROR: Debe haber cargado algun un vehiculo. Desea cargar uno?\n1 - Si \n2 - No')
                if (opc == '1') {
                    vehiculo = cargarVehiculo();
                    console.log(listaVehiculos);
                } else {
                    alert('Adios...')
                }
            }
            break;
        case '3':
            filtrarVehiculos();
            break;
        case '5':
            mostrarTodosLosVehiculos();
            break;
        default:
            break;
    }
    opcion = (prompt(mensaje));
}
