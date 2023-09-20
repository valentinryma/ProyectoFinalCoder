//? Formulario - Agregar vehiculo
const formAddVehiculo = document.getElementById('form-agregar-vehiculo');
listaVehiculos = JSON.parse(localStorage.getItem('stock'));

formAddVehiculo.addEventListener('submit', (e) => {
    e.preventDefault();
    const marca = (document.getElementById('form-marca')).value;
    const modelo = (document.getElementById('form-modelo')).value;
    const traccion = (document.getElementById('form-traccion')).value;
    const hp = (document.getElementById('form-hp')).value;
    const anio = (document.getElementById('form-año')).value;
    const precio = (document.getElementById('form-precio')).value;
    const estado = (document.getElementById('form-estado')).value;
    const km = (document.getElementById('form-km')).value;
    const foto = (document.getElementById('form-foto')).value;
    const descripcion = (document.getElementById('form-descripcion')).value;

    const vehiculo = new Vehiculo(marca, modelo, traccion, hp, anio, precio, estado, km, foto, descripcion);
    agregarVehiculos(vehiculo);

    // Imagen de Confirmacion
    Swal.fire({
        title: `${marca} ${modelo}`,
        text: 'Vehiculo agregado correctamente...',
        imageUrl: `${foto}`,
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: `${marca} ${modelo}`,
        showConfirmButton: false,
        timer: 1500
    })
});

