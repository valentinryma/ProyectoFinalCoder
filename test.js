console.log('as')
//! PRODUCTOS ----------------------------------------------------------------------------------------
class Vehiculo {
    static contadorVehiculos = 0;
    constructor(marca, modelo, traccion, hp, anio, precio, estado, km, foto, descripcion) {
        this.marca = marca;
        this.modelo = modelo;
        this.traccion = traccion;
        this.anio = anio;
        this.hp = hp;
        this.estado = estado;
        this.precio = precio;
        this.km = km;
        this.foto = foto;
        this.descripcion = descripcion;

        // Asigna automaticamente e incrementalmente el id cada vez que sea crea un nuevo objeto
        this.id = ++Vehiculo.contadorVehiculos;
    }
    mostrarVehiculo() {
        let texto =
            (
                '-- MOSTRANDO VEHICULO --' + '\n' +
                'Id Vehiculo: ' + this.id + '\n' +
                'Marca: ' + this.marca + '\n' +
                'Modelo: ' + this.modelo + '\n' +
                'Traccion: ' + this.traccion + '\n' +
                'Anio: ' + this.anio + '\n' +
                'Hp: ' + this.hp + '\n' +
                'Estado: ' + this.estado + '\n' +
                'Precio: ' + '$' + this.precio + '\n'
            );
        alert(texto);
    }
}

// Stock de Vechiculos Inicial:
const listaVehiculos = [
    new Vehiculo('BMW', 'E36', 'Trasera', 196, 1996, 15000, 'Usado', 60000, 'img/productos/1.jpg'),
    new Vehiculo('Honda', 'Civic', 'Delantera', 134, 1998, 12000, 'Usado', 12000, 'img/productos/2.jpg'),
    new Vehiculo('Ford', 'Fiesta', 'Delantera', 100, 2008, 3750, 'Usado', 22000, 'img/productos/3.jpg'),
    new Vehiculo('Ford', '150', 'Trasera', 245, 1985, 850, 'Usado', 67000, 'img/productos/4.jpg'),
    new Vehiculo('Nissan', 'Kicks', 'Delantera', 80, 2019, 5000, 'Usado', 1233, 'img/productos/5.jpg'),
    new Vehiculo('Toyota', 'Etios', 'Delantera', 96, 2023, 7500, 'Nuevo', 0, 'img/productos/6.jpg'),
    new Vehiculo('Jeep', 'Commander', 'Trasera', 200, 2022, 10000, 'Nuevo', 0, 'img/productos/7.jpg')
];

//? Formulario - Agregar vehiculo
const formAddVehiculo = document.getElementById('form-agregar-vehiculo');
formAddVehiculo.addEventListener('submit', (e) => {
    const marca = document.getElementById('form-marca');
    const modelo = document.getElementById('form-modelo');
    const traccion = document.getElementById('form-traccion');
    const hp = document.getElementById('form-hp')
    const anio = document.getElementById('form-año');
    const precio = document.getElementById('form-precio');
    const estado = document.getElementById('form-estado');
    const km = document.getElementById('form-km')
    const foto = document.getElementById('form-foto')
    const descripcion = document.getElementById('form-descripcion');
    e.preventDefault();
    cargarVehiculo();

    // console.log(marca.value);
    // console.log(modelo.value);
    // console.log(traccion.value);
    // console.log(hp.value);
    // console.log(anio.value);
    // console.log(precio.value);
    // console.log(estado.value);
    // console.log(km.value);
    // console.log(foto.value);
    // console.log(descripcion.value);

    // const test = cargarVehiculo(
    //     marca.value,
    //     modelo.value,
    //     traccion.value,
    //     hp.value,
    //     anio.value,
    //     precio.value,
    //     estado.value,
    //     km.value,
    //     foto.value,
    //     descripcion.value);



});
//! PRODUCTOS ----------------------------------------------------------------------------------------









//! FUNCIONES MENU PRINCIPAL ---------------------------------------------------------------------------
//? FUNCIONES MENU PRINCIPAL 
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
    let descripcion = prompt('Ingrese la descripcion de la imagen: ');

    const vehiculo = new Vehiculo(marca, modelo, traccion, hp, anio, precio, estado, km, foto, descripcion);
    console.table(vehiculo);

    listaVehiculos.push(vehiculo); // Agregamos a la lista total de Vehiculos.
    limpiar();
    renderizar(listaVehiculos);
    console.log('\n');
    // return vehiculo;
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

function menuPrincipal() {
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
}
//! FUNCIONES MENU PRINCIPAL ---------------------------------------------------------------------------



















//! DESPLIFUE CATEGORIAS -------------------------------------------------------------------------------
// JavaScript para gestionar los títulos de las categorías de filtros
const categoryTitles = document.getElementsByClassName('category-title');

for (let i = 0; i < categoryTitles.length; i++) {
    categoryTitles[i].addEventListener('click', () => {
        categoryTitles[i].classList.toggle('open');
    });
}


// JavaScript para limpiar filtros
const clearFiltersButton = document.getElementById('clearFiltersButton');
const selectYearMin = document.getElementById('select-year-min');
const selectYearMax = document.getElementById('select-year-max');

clearFiltersButton.addEventListener('click', () => {
    const inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'checkbox' || inputs[i].type === 'radio') {
            inputs[i].checked = false;
        } else if (inputs[i].type === 'number') {
            inputs[i].value = '';
        }

    }

    // Resetear la opción seleccionada en el select de año
    selectYearMin.selectedIndex = 0;
    selectYearMax.selectedIndex = 0;
});
//! DESPLIFUE CATEGORIAS -------------------------------------------------------------------------------


//! FUNCIONES FILTRO ----------------------------------------------------------------------------------
//? FUNCIONES FILTRO 

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
    renderizar(vehiculosFiltrados);
}


//! FUNCIONES FILTRO ----------------------------------------------------------------------------------














//! LOGIN -----------------------------------------------------------------------------------
const formularioLogin = document.getElementById('iniciar-sesion');

// Datos del Formulario
formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault(); // No envia el form.
    const opciones = document.getElementsByName("rol");
    const avisoEnvioCorrecto = document.getElementById('notificacionEvioCorrecto');
    let rol = "";

    // Recorre la lista de elementos de radio y encuentra el que está seleccionado.
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            rol = opciones[i].value;
            break;
        }
    }

    if (rol != '') {
        localStorage.setItem('rol', rol);
        avisoEnvioCorrecto.innerText = 'Formulario enviado correctamente... Será reedireccionado';
        avisoEnvioCorrecto.style.marginTop = '25px';
        // Reedirecciona a la pagina principal
        setTimeout(function () {
            // Cambia la URL actual a la URL de destino.
            window.location.href = "index.html";
        }, 1500);
    } else {
        avisoEnvioCorrecto.innerText = 'Por favor eliga una opcion...';
        avisoEnvioCorrecto.style.color = 'red';
        avisoEnvioCorrecto.style.marginTop = '25px';
    }
});

//! LOGIN -----------------------------------------------------------------------------------































//! MAIN -----------------------------------------------------------------------------------------------
//? DOM - Pagina Principal
const btnConfigurarFiltros = document.getElementById('btnConfigurarFiltros');
const btnAgregarVehiculo = document.getElementById('btnAgregarVehiculo');
const btnLimpiarFiltros = document.getElementById('clearFiltersButton');
const btnVerFiltros = document.getElementById('btnVerFiltros');

const seccionProductos = document.getElementById('products');
const btnAgregar = document.getElementById('agregar');

const usuario = document.getElementById('usuario');


btnLimpiarFiltros.onclick = () => {
    renderizar(listaVehiculos);
    console.log('renderizando...')
}

// btnAgregarVehiculo.onclick = () => {
//     cargarVehiculo();
// }

btnConfigurarFiltros.onclick = () => {
    let filtro = configFiltro();
    filtrar(filtro);
}


//? Uso de Storage
// El rol de Administrador, se accede en el inicio de sesion (Click Imagen de Perfil).
let rol = localStorage.getItem('rol');
usuario.classList.add(rol);
rol == 'admin' && usuario.removeAttribute('hidden');


function time() {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const dia = document.getElementsByClassName('dia');
    const hora = document.getElementsByClassName('hora');

    let d = new Date().getDay();
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    for (let i = 0; i < dia.length; i++) {
        dia[i].innerText = `${dias[d]}`;
        console.log(dias, d);
        hora[i].innerText = `${h}:${m}`;
    }

}

function renderizar(listaVehiculos) {
    // Renderiza todos los vehiculos que esten en el Array ("stock");
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

function limpiar() {
    // Limpiar Pantalla (Productos)
    seccionProductos.innerHTML = '';
}


function main() {
    renderizar(listaVehiculos);
}

setInterval(time, 60000);
time();
main();


//! MAIN -----------------------------------------------------------------------------------------------