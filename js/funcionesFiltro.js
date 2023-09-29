//? FUNCIONES FILTRO
const categoryTitles = document.getElementsByClassName('category-title');
// Despliegue categorias de los filtros
for (let i = 0; i < categoryTitles.length; i++) {
    categoryTitles[i].addEventListener('click', () => {
        categoryTitles[i].classList.toggle('open');
    });
}

// Limpiar filtros
const clearFiltersButton = document.getElementById('clearFiltersButton');
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
    selectAñoMin.selectedIndex = 0;
    selectAñoMax.selectedIndex = 0;
});

//? Filtro - Eventos
// Precio
const inputPrecioMin = document.getElementById('input-precio-min');
const inputPrecioMax = document.getElementById('input-precio-max');
let precioMax = '';
let precioMin = '';

inputPrecioMax.addEventListener('change', () => {
    precioMax = inputPrecioMax.value;
});
inputPrecioMin.addEventListener('change', () => {
    precioMin = inputPrecioMin.value;
});

// Estado
const checkboxesEstados = document.querySelectorAll('input[name="estado"]');
const valoresEstadoSeleccionados = [];

checkboxesEstados.forEach((checkbox) => {
    checkbox.onchange = () => {
        if (checkbox.checked) {
            valoresEstadoSeleccionados.push((checkbox.value).toLowerCase());
        } else {
            const index = valoresEstadoSeleccionados.indexOf((checkbox.value).toLowerCase());
            (index !== -1) && valoresEstadoSeleccionados.splice(index, 1)
        }
    };
});

// Marca
const checkboxesMarca = document.querySelectorAll('input[name="marca"]');
const valoresMarcaSeleccionados = [];

checkboxesMarca.forEach((checkbox) => {
    checkbox.onchange = () => {
        if (checkbox.checked) {
            valoresMarcaSeleccionados.push((checkbox.value).toLowerCase());
        } else {
            const index = valoresMarcaSeleccionados.indexOf((checkbox.value).toLowerCase());
            if (index !== -1) {
                valoresMarcaSeleccionados.splice(index, 1)
            }
        }
    };
});

// Traccion
const radioTraccion = document.querySelectorAll('input[name="traccion"]');
let valorRadioTraccion = '';
radioTraccion.forEach((radio) => {
    radio.onchange = () => {
        if (radio.checked) {
            valorRadioTraccion = radio.value;
        }
    };

});

// Año
const selectAñoMin = document.getElementById('select-anio-min');
const selectAñoMax = document.getElementById('select-anio-max');
let añoMin = '';
let añoMax = '';

selectAñoMin.addEventListener('change', () => {
    añoMin = selectAñoMin.value;
});
selectAñoMax.addEventListener('change', () => {
    añoMax = selectAñoMax.value;
});


let vehiculosFiltrados = [];
listaVehiculos.forEach(v => {
    vehiculosFiltrados.push(v);
})

let vehiculosBuscados = [];


const sideBar = document.getElementById('sidebar');
sideBar.addEventListener('change', () => {
    vehiculosFiltrados = listaVehiculos.filter((vehiculo) => {
        let condicion = (
            (precioMin == "" || (vehiculo.precio >= parseInt(precioMin))) &&
            (precioMax == "" || (vehiculo.precio <= parseInt(precioMax))) &&
            (valoresMarcaSeleccionados.length == 0 || valoresMarcaSeleccionados.includes(vehiculo.marca.toLowerCase())) &&
            (valoresEstadoSeleccionados.length == 0 || valoresEstadoSeleccionados.includes(vehiculo.estado.toLowerCase())) &&
            (añoMin == "" || (vehiculo.anio >= parseInt(añoMin))) &&
            (añoMax == "" || (vehiculo.anio <= parseInt(añoMax))) &&
            (valorRadioTraccion == 'todo' || valorRadioTraccion == '' || (vehiculo.traccion).toLowerCase() == valorRadioTraccion.toLowerCase())
        );

        return condicion;
    });
    renderizar(vehiculosFiltrados);

});

// Barra Busqueda
const searchBar = document.getElementById('buscar');
searchBar.addEventListener('click', () => {
    //* Busca vehiculos que contengan la palabra ingresada en la barra de busqueda
    // en cualquiera de sus propiedades (ej: 196 -> si algun vehiculo tiene 196 hp lo mostrará)
    // Los filtros del sidebar siguen funcionando en paralelo
    // primero se debe aplicar el filtro del sidebar y luego terminar de filtrar a traves de la barra de busqueda

    vehiculosBuscados = [];
    const busqueda = document.getElementById('parametro-busqueda');
    const busquedaTexto = busqueda.value.toLowerCase().trim().replace(/\s+/g, ',');
    // Usa una expresion regular donde remplaza todos (+\g) los espacios (\s) por una coma (',')

    console.log(busquedaTexto);

    vehiculosFiltrados.forEach((vehiculo) => {
        if (Object.values(vehiculo).toString().toLowerCase().includes(busquedaTexto)) {
            vehiculosBuscados.push(vehiculo);
        }
        console.log(Object.values(vehiculo).toString().toLowerCase());

    })

    renderizar(vehiculosBuscados);
})





