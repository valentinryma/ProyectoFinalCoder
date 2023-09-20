//? FUNCIONES PRINCIPALES
const asignarRol = () => {
    let rol = localStorage.getItem('rol');
    usuario.classList.add(rol);
    rol == 'admin' && usuario.removeAttribute('hidden');
};

const time = () => {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const dia = document.getElementsByClassName('dia');
    const hora = document.getElementsByClassName('hora');

    let d = new Date().getDay();
    let h = new Date().getHours();
    let m = new Date().getMinutes();

    for (let i = 0; i < dia.length; i++) {
        dia[i].innerText = `${dias[d]}`;
        hora[i].innerText = `${h}:${m}`;
    }

}

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

