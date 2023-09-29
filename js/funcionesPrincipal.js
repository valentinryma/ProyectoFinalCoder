//? FUNCIONES PRINCIPALES
const aviso = () => {
    //* Alerta para saber donde esta el panel de Inicio de Sesion.

    Toastify({
        text: "Login 👉🏼",
        offset: {
            x: 45,
            y: -1.5
        },
        duration: 1500,
        style: {
            background: "#870000",
            border: "solid 1px black",
            borderRadius: "50px"
        },
        destination: "inicioSesion.html"
    }).showToast();
};

const obtenerUsers = () => {
    const URLUSERS = "/users.json";
    fetch(URLUSERS)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            const listaUsuarios = data.users;
            for (const user of listaUsuarios) {
                usuarios.push(user);
            }
        })
}

const asignarRol = () => {
    //* Asigna el rol del usuario (admin/user)

    let rol = localStorage.getItem('rol');
    usuario.classList.add(rol);
    rol == 'admin' && usuario.removeAttribute('hidden');
};

const asignarFtUsuario = () => {
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
                <button id="btnEliminarVehiculo${vehiculo.id}" class="btn btn-danger" onclick="eliminarVehiculo(${vehiculo.id})">Eliminar</button>
            </div>
            `;
        }
    } else {
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

};

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