class Vehiculo {
    static contadorVehiculos = 0;
    constructor(marca, modelo, traccion, hp, anio, precio, estado, km, foto, descripcion) {
        this.marca = marca;
        this.modelo = modelo;
        this.traccion = traccion;
        this.anio = anio;
        this.hp = hp;
        this.estado = estado;
        this.precio = precio;
        this.km = km;
        this.foto = foto;
        this.descripcion = descripcion;

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

