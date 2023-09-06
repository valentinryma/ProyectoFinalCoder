class Vehiculo {
    static contadorVehiculos = 0;
    constructor(marca, modelo, traccion, hp, anio, precio, estado, km, foto) {
        this.marca = marca;
        this.modelo = modelo;
        this.traccion = traccion;
        this.anio = anio;
        this.hp = hp;
        this.estado = estado;
        this.precio = precio;
        this.km = km;
        this.foto = foto;

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
const listaVehiculos = [];

// Stock de Vechiculos Inicial:
const v1 = new Vehiculo('BMW', 'E36', 'Trasera', 196, 1996, 15000, 'Usado', 60000, 'img/productos/1.jpg');
const v2 = new Vehiculo('Honda', 'Civic', 'Delantera', 134, 1998, 12000, 'Usado', 12000, 'img/productos/2.jpg');
const v3 = new Vehiculo('Ford', 'Fiesta', 'Delantera', 100, 2008, 3750, 'Usado', 22000, 'img/productos/3.jpg');
const v4 = new Vehiculo('Ford', '150', 'Trasera', 245, 1985, 850, 'Usado', 67000, 'img/productos/4.jpg');
const v5 = new Vehiculo('Nissan', 'Kicks', 'Delantera', 80, 2019, 5000, 'Usado', 1233, 'img/productos/5.jpg');
const v6 = new Vehiculo('Toyota', 'Etios', 'Delantera', 96, 2023, 7500, 'Nuevo', 0, 'img/productos/6.jpg');
const v7 = new Vehiculo('Jeep', 'Commander', 'Trasera', 200, 2022, 10000, 'Nuevo', 0, 'img/productos/7.jpg');
listaVehiculos.push(v1, v2, v3, v4, v5, v6, v7);


