const productos = [
    new Vehiculo('BMW', 'E36', 'Trasera', 196, 1996, 15000, 'Usado', 60000, 'img/productos/1.jpg'),
    new Vehiculo('Honda', 'Civic', 'Delantera', 134, 1998, 12000, 'Usado', 12000, 'img/productos/2.jpg'),
    new Vehiculo('Ford', 'Fiesta', 'Delantera', 100, 2008, 3750, 'Usado', 22000, 'img/productos/3.jpg'),
    new Vehiculo('Ford', '150', 'Trasera', 245, 1985, 850, 'Usado', 67000, 'img/productos/4.jpg'),
    new Vehiculo('Nissan', 'Kicks', 'Delantera', 80, 2019, 5000, 'Usado', 1233, 'img/productos/5.jpg'),
    new Vehiculo('Toyota', 'Etios', 'Delantera', 96, 2023, 7500, 'Nuevo', 0, 'img/productos/6.jpg'),
    new Vehiculo('Jeep', 'Commander', 'Trasera', 200, 2022, 10000, 'Nuevo', 0, 'img/productos/7.jpg')
];


// Verifica si ya hay productos en el localStorage
if (!localStorage.getItem("stock")) {
    // Si no hay productos, inicializa el arreglo base y lo guarda en el localStorage

    localStorage.setItem("stock", JSON.stringify(productos));
}

listaVehiculos = JSON.parse(localStorage.getItem('stock'));


const resetDB = () => {
    Swal.fire({
        title: 'Seguro que desea resetera la base de datos?',
        showDenyButton: true,
        confirmButtonText: 'Resetear',
        denyButtonText: `Cancelar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            localStorage.removeItem('stock');
            localStorage.setItem("stock", JSON.stringify(productos));
            listaVehiculos = JSON.parse(localStorage.getItem('stock'));
            renderizar(listaVehiculos);
            Swal.fire('Resetado exitoso!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('No se han realizado cambios.', '', 'info')
        }
    })

}