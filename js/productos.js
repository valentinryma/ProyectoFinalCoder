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
}

