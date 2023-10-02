//? FUNCIONES PRINCIPALES

async function obtenerUsers() {
    //* Trae los datos del archivo JSON en un arreglo 'usuarios'
    // En initProductos.js esta el arreglo declarado de manera global y el llamado de la funcion.

    const URLUSERS = "/db/users.json";
    const respuesta = await (fetch(URLUSERS));
    const datos = await respuesta.json();
    const users = datos.users;
    for (const usuario of users) {
        usuarios.push(usuario);
    }

}

async function obtenerDB() {
    //* Trae los datos del archivo JSON  en un arreglo 'productos'
    // En initProductos.js esta el arreglo declarado de manera global y el llamado de la funcion.

    const URLJSON = '/db/DB.json';
    const respuesta = await (fetch(URLJSON));
    const datos = await respuesta.json();
    const vehiculos = datos.vehiculos;
    for (vehiculo of vehiculos) {
        productos.push(vehiculo);
    }
}

const aviso = () => {
    //* Alerta para saber donde esta el panel de Inicio de Sesion.

    Toastify({
        text: "Login 👆🏼",
        offset: {
            x: 195,
            y: 40
        },
        duration: 1000,
        style: {
            background: "#870000",
            border: "solid 1px black",
            borderRadius: "50px"
        },
        destination: "logIn.html"
    }).showToast();
};

const asignarRol = () => {
    //* Asigna el rol del usuario (admin/user)

    let rol = localStorage.getItem('rol');
    usuario.classList.add(rol);
    usuario.removeAttribute('hidden');
    if (rol == 'admin') {
        localStorage.setItem('foto', 'https://secure.gravatar.com/avatar/e77e62c434f46533200645adb2980ae4?s=86&d=robohash&r=g')
        usuario.innerHTML = ` 
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <h6 class="dropdown-header">Menu de Opciones</h6>
                <button class="dropdown-item" type="button" id="btnAgregarVehiculo">
                    <a href="agregarVehiculo.html">Agregar un Vehiculo</a>
                </button>
                <button class="dropdown-item" type="button" id="btnResetDB">Resetear DB</button>
                <button class="dropdown-item" type="button" id="btnLogOut">
                    Cerrar sesion
                </button>
            </div>
            `;
        const btnResetDB = document.getElementById('btnResetDB')
        btnResetDB.onclick = () => {
            resetDB();
        }

    } else if (rol == 'visitor') {
        usuario.innerHTML = `
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <h6 class="dropdown-header">Menu de Opciones</h6>
                <button class="dropdown-item" type="button" id="btnLogIn">
                    <a href="logIn.html">Iniciar sesion</a>
                </button>
                <button class="dropdown-item" type="button" id="btnSigIn">
                    <a href="sigIn.html">Crear cuenta</a>
                </button>
            </div>
            `;
    } else {
        usuario.innerHTML = `
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <h6 class="dropdown-header">Menu de Opciones</h6>
                <button class="dropdown-item" type="button" id="btnLogOut">
                    Cerrar sesion
                </button>
            </div>
            `;
    }
    if (rol == 'admin' || rol == 'user') {
        //* LogOut - Cambia a una sesion de visitante por defecto.

        const logOut = document.getElementById('btnLogOut');
        logOut.addEventListener('click', () => {
            localStorage.setItem('rol', 'visitor');
            localStorage.setItem('foto', 'https://i.pinimg.com/originals/c5/ea/88/c5ea885c9cf5f7f8fc9b3fb73dcffa42.jpg');

            window.location.href = "index.html";
        })
    }
};

const asignarFtUsuario = () => {
    //* Asigna la imagen del perfil en el DOM, segun sea el usuario.

    let foto = localStorage.getItem('foto');


    const imgUsuario = document.getElementById('img-usuario');
    imgUsuario.innerHTML = `
        <img src="${foto}" alt="Usuario" width="32" height="32" />
    `;
}

const time = () => {
    //* Obtiene y renderiza la hora y el dia.

    const dia = document.getElementById('dia');
    const hora = document.getElementById('hora');

    const DateTime = luxon.DateTime;
    const inicio = DateTime.now();

    const h = inicio.toLocaleString(DateTime.TIME_24_SIMPLE); // Hora y Minutos
    const d = inicio.weekdayLong; // Dia de la semana 

    hora.innerText = `${h}`;
    dia.innerText = `${d}`;
};

const agregarVehiculos = (...vehiculos) => {
    //* Agrega un o una lista de vehiculos al localStorage

    for (const vehiculo of vehiculos) {
        listaVehiculos.push(vehiculo);
    }
    localStorage.setItem('stock', JSON.stringify(listaVehiculos));
};


const renderizar = (listaVehiculos) => {
    //* Recibe un arreglo de Vehiculos, el cual sera renderizado en el index.html 

    asignarFtUsuario();
    asignarRol();

    seccionProductos.innerHTML = '';  // Limpia los productos previamente.
    if (localStorage.getItem('rol') == 'admin') {
        // Si es admin, se renderizará el "panel administrativo"
        for (const vehiculo of listaVehiculos) {
            seccionProductos.innerHTML += `
            <div class="product" id="${vehiculo.id}">
                <a href="auto1.html" onclick="selecionarVehiculo(${vehiculo.id})">
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
                <button id="btnEliminarVehiculo${vehiculo.id}" class="btn btn-danger" onclick="eliminarVehiculo(${vehiculo.id})">Eliminar</button>
            </div>
            `;
        }
    } else {
        for (const vehiculo of listaVehiculos) {
            seccionProductos.innerHTML += `
            <div class="product" id="${vehiculo.id}">
                <a href="auto1.html" onclick="selecionarVehiculo(${vehiculo.id})">
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
};

const selecionarVehiculo = (id) => {
    //* Carga el vehiculo de manera unica en el localStorage, para posteriormente renderizar una pagina 
    // con ese vehiculo.

    vehiculo = (JSON.parse(localStorage.getItem('stock'))).find((v) => v.id == id);
    localStorage.setItem("vehiculo", JSON.stringify(vehiculo));
}

const limpiar = () => {
    //* Limpia el contenido del index.html (La seccion donde se ubican los vehiculos en venta)
    seccionProductos.innerHTML = '';
};

const eliminarVehiculo = (id) => {
    //* Elimina el vehiculo selecionado / SweetAlert para confirmar la decision de eliminar.
    Swal.fire({
        title: 'Seguro que desea eliminar este vehiculo?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            for (let i = 0; i < listaVehiculos.length; i++) {
                if (listaVehiculos[i].id == id) {
                    let indice = i;
                    listaVehiculos.splice(indice, 1);
                    localStorage.removeItem('stock');
                    localStorage.setItem('stock', JSON.stringify(listaVehiculos))
                    renderizar(listaVehiculos);
                    return indice;
                }
            }
            Swal.fire('Vehiculo eliminado con exito.', '', 'success')
        }
    })
}