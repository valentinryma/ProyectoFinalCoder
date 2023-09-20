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

