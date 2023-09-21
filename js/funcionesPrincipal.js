//? FUNCIONES PRINCIPALES
const aviso = () => {
    Toastify({
        text: "Login 👉🏼",
        offset: {
            x: 45,
            y: -1.5 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        duration: 1500,
        style: {
            background: "#870000",
            border: "solid 1px black",
            borderRadius: "50px"
        }
    }).showToast();
};

const asignarRol = () => {
    let rol = localStorage.getItem('rol');
    usuario.classList.add(rol);
    rol == 'admin' && usuario.removeAttribute('hidden');
};

const time = () => {
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
    for (const vehiculo of vehiculos) {
        listaVehiculos.push(vehiculo);
    }
    localStorage.setItem('stock', JSON.stringify(listaVehiculos));
};

const renderizar = (listaVehiculos) => {
    asignarRol();
    // Renderiza todos los vehiculos que esten en el Array ("stock");
    seccionProductos.innerHTML = '';  // Limpia los productos previamente.
    if (localStorage.getItem('rol') == 'admin') {
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
    // Limpiar Pantalla (Productos)
    seccionProductos.innerHTML = '';
};


const eliminarVehiculo = (id) => {
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

