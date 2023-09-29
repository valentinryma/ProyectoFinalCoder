time();
asignarFtUsuario();

const container = document.getElementById('compra-vehiculo-principal');
const vehiculo = JSON.parse(localStorage.getItem('vehiculo'));
console.log(vehiculo)

container.innerHTML = `
    <div class="vehicle-details">
        <div class="vehicle-image">
            <img src="${vehiculo.foto}" alt="Vehículo${vehiculo.marca}_${vehiculo.modelo}" width="700px;"/>
        </div>
        <div class="basic-info">
            <h2 class="heading-2">Información Básica</h2>
            <div class="grid-container">
                <div class="grid-item">
                    <p class="name">Marca</p>
                    <p class="description">${vehiculo.marca}</p>
                </div>
                <div class="grid-item">
                    <p class="name">Modelo</p>
                    <p class="description">${vehiculo.modelo}</p>
                </div>
                <div class="grid-item">
                    <p class="name">Traccion</p>
                    <p class="description">${vehiculo.traccion}</p>
                </div>
                <div class="grid-item">
                    <p class="name">Año</p>
                    <p class="description">${vehiculo.anio}</p>
                </div>
                <div class="grid-item">
                    <p class="name">Estado</p>
                    <p class="description">${vehiculo.estado}</p>
                </div>
                <div class="grid-item">
                    <p class="name">Hp</p>
                    <p class="description">${vehiculo.hp}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="sidebar">
        <h2>${vehiculo.marca} ${vehiculo.modelo}</h2>
        <p class="km">${vehiculo.km}km</p>
        <p class="precio">$${vehiculo.precio}</p>
        <button class="compra-button" onclick="comprarVehiculo(${vehiculo.id})">Comprar</button>
        <div class="address">
          <h2>Car Place Luxury Car</h2>
          <p>Carlos F. Melo 689, Vicente López </p>
          <p>Buenos Aires, B1638CHA</p>
        </div>
        <div class="id-vehiculo">
          <h2>ID del vehículo:</h2>
          <p>${vehiculo.id}</p>
        </div>
    </div>
`;


const jsConfetti = new JSConfetti({ document })


const comprarVehiculo = (id) => {

    //* Elimina el vehiculo selecionado / SweetAlert para confirmar la decision de eliminar.
    Swal.fire({
        title: 'Seguro que desea comprar este vehiculo?',
        showDenyButton: true,
        confirmButtonText: 'Comprar',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
            jsConfetti.addConfetti()
            Swal.fire('Vehiculo comprado con exito.', '', 'success')
        }
    })
}


