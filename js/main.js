class Vehiculo {
    static contadorVehiculos = 0;
    constructor (marca, modelo, traccion, hp, anio, precio, estado) {
        this.marca = marca;
        this.modelo = modelo;
        this.traccion = traccion;
        this.anio = anio;
        this.hp = hp;
        this.estado = estado;
        this.precio = precio;
        // Asigna automaticamente e incrementalmente el id cada vez que sea crea un nuevo objeto
        this.id = ++ Vehiculo.contadorVehiculos; 
    }
    mostrarVehiculo(){
        let texto = 
        (
            '-- MOSTRANDO VEHICULO --'        + '\n' +
            'Id Vehiculo: '  + this.id        + '\n' +   
            'Marca: '        + this.marca     + '\n' +        
            'Modelo: '       + this.modelo    + '\n' +     
            'Traccion: '     + this.traccion  + '\n' +       
            'Anio: '         + this.anio      + '\n' +                
            'Hp: '           + this.hp        + '\n' +         
            'Estado: '       + this.estado    + '\n' +             
            'Precio: ' + '$' + this.precio    + '\n'
        );               
        alert(texto);
    }
}
const listaVehiculos = [];

//* TEST
// Para probar el funcionamiento de los filtros...
const v1 = new Vehiculo('BMW', 'E36', 'Trasera', 196, 1996, 15000, 'Usado');
const v2 = new Vehiculo('Honda', 'Civic', 'Delantera', 134, 1998, 12000, 'Usado');
const v3 = new Vehiculo('Ford', 'Fiesta', 'Delantera', 100, 2008, 3750, 'Usado');
const v4 = new Vehiculo('Ford', '150', 'Trasera', 245, 1985, 850, 'Usado');
const v5 = new Vehiculo('Nissan', 'Kicks', 'Delantera', 80, 2019, 5000, 'Usado');
const v6 = new Vehiculo('Toyota', 'Etios', 'Delantera', 96, 2023, 7500, 'Nuevo');
const v7 = new Vehiculo('Jeep', 'Commander', 'Trasera', 200, 2022, 10000, 'Nuevo');
listaVehiculos.push(v1,v2,v3,v4,v5,v6,v7)

//? FUNCIONES FILTRO ---------------------------->
const filtroConfig = () => {
    alert('-- SETEAR FILTROS --\nIngrese 0 para no aplicar el filtro en el campo.');
    let marca  = prompt('Ingrese la Marca: ');
    let modelo = prompt('Ingrese el modelo: ');
    let traccion = prompt('Ingrese el tipo de Traccion: ');
    let hp     = parseInt(prompt('Ingrese los HP: '));
    let anio   = parseInt(prompt('Ingrese el Año: '));
    let precioMin = parseFloat(prompt('Ingrese el precio Minimo: $'));
    let precioMax = parseFloat(prompt('Ingrese el precio Maximo: $'));
    let estado = prompt('Ingrese el Estado: ');
    let configFiltro = [marca, modelo, traccion, hp, anio, precioMin, precioMax, estado];
    return configFiltro;
}

const filtroVer = (configFiltro) => {
    let texto = 
        (
            '-- MOSTRANDO FILTROS --'        + '\n' +
            'Marca: '        + configFiltro[0]  + '\n' +        
            'Modelo: '       + configFiltro[1]  + '\n' +     
            'Traccion: '     + configFiltro[2]  + '\n' +       
            'Hp: '           + configFiltro[3]  + '\n' +                
            'Anio: '         + configFiltro[4]  + '\n' +         
            'Precio Minimo: ' + '$' + configFiltro[5]  + '\n' +
            'Precio Maximo: ' + '$' + configFiltro[6]  + '\n' +
            'Estado: '              + configFiltro[7]  + '\n'             
        );               
        alert(texto);
}

const filtroBuscar = (configFiltro, listaVehiculos) => {
    alert('-- RESULTADOS --');
    console.log(configFiltro + ' \n' + configFiltroDefault);
    if (configFiltro != configFiltroDefault){
        for (const vehiculo of listaVehiculos) {
            if ( 
                (vehiculo.marca.toLowerCase()  == configFiltro[0].toLowerCase() | configFiltro[0] == '0') &&
                (vehiculo.modelo.toLowerCase() == configFiltro[1].toLowerCase() | configFiltro[1] == '0') &&
                (vehiculo.traccion.toLowerCase() == configFiltro[2].toLowerCase() | configFiltro[2] == '0') &&
                (vehiculo.hp >= configFiltro[3]-60 && vehiculo.hp <= configFiltro[3]+60|configFiltro[3] == '0')&&
                (vehiculo.anio == configFiltro[4] | configFiltro[4] == '0') &&
                (vehiculo.precio >= configFiltro[5] && vehiculo.precio <= configFiltro[6] | configFiltro[5] == '0' | configFiltro[6] == '0') &&
                (vehiculo.estado.toLowerCase() == configFiltro[7]| configFiltro[7] == '0') 
               ){
                vehiculo.mostrarVehiculo();
            }
        }
    }
}
// FIN FUNCIONES FILTRO <!---------------------------

//? FUNCIONES MENU PRINCIPAL ----------------------------------->
const cargarVehiculo = () => {
    alert('-- CARGAR DATOS DEL VEHICULO --');
    let marca  = prompt('Ingrese la Marca: ');
    let modelo = prompt('Ingrese el modelo: ');
    let traccion = prompt('Ingrese el tipo de Traccion: ');
    let hp     = parseInt(prompt('Ingrese los HP: '));
    let anio   = parseInt(prompt('Ingrese el Año: '));
    let precio = parseFloat(prompt('Ingrese el precio: $'));
    let estado = prompt('Ingrese el Estado: ');
    
    const vehiculo = new Vehiculo(marca, modelo, traccion, hp, anio, precio, estado);
    listaVehiculos.push(vehiculo); // Agregamos a la lista total de Vehiculos.
    console.log('\n');
    return vehiculo;
}

const buscarVehiculoId = (listaVehiculos) => {
    encontrado = false;
    alert('-- BUSCAR VEHICULO --');
    let id = parseInt(prompt('Ingrese el ID del vehiculo'));
    for (const vehiculo of listaVehiculos) {
        if (vehiculo.id == id) {
            vehiculo.mostrarVehiculo();
            encontrado = true;
            break;
        }
    }
    if (!encontrado){
        alert('Ningun vehiculo con ID: ' + "'" + id + "'");
    }
}

configFiltroDefault = ['0', '0', '0', '0', '0', '0', '0', '0']; // GLOBAL
const filtrarVehiculo = (listaVehiculos) => {
    configFiltro = ['0', '0', '0', '0', '0', '0', '0', '0']; // Config default
    const mensaje = 
    (
        '-- FILTRAR VEHICULOS MENU --'  + '\n' +  
        '1 - Configurar Filtros'        + '\n' +  
        '2 - Ver Filtros Activos '      + '\n' +  
        '3 - Buscar'                    + '\n' +  
        'S - Salir'
    );
    
    let opcion = (prompt(mensaje)).toLocaleLowerCase();
    while (opcion != 's') {
        switch (opcion) {
            case '1':
                configFiltro = filtroConfig();
                break;
            case '2':
                filtroVer(configFiltro);
                break;
            case '3':
                filtroBuscar(configFiltro, listaVehiculos);
                break;
            default:
                break;
        }
        opcion = (prompt(mensaje)).toLocaleLowerCase();
    }
}

const mostrarTodosLosVehiculos = (listaVehiculos) => { 
    if (listaVehiculos.length != 0){
        let todosLosVehiculos = '-- LISTANDO TODOS LOS VEHICULOS --\n';
        for (const vehiculo of listaVehiculos) {
            todosLosVehiculos += (
                '-- VEHICULO '   + vehiculo.id + ' -- ' + '\n' + 
                'Marca: '        + vehiculo.marca     + '\n' + 
                'Modelo: '       + vehiculo.modelo    + '\n' + 
                'Traccion: '     + vehiculo.traccion  + '\n' + 
                'Anio: '         + vehiculo.anio      + '\n' + 
                'Hp: '           + vehiculo.hp        + '\n' + 
                'Estado: '       + vehiculo.estado    + '\n' + 
                'Precio: ' + '$' + vehiculo.precio    + '\n' +
                '----------------' + '\n');
        }
        alert(todosLosVehiculos);
        console.log(todosLosVehiculos);
    } else {
        alert('No hay vehiculos cargados');
    }
}

// FIN FUNCIONES MENU <!----------------------------------->

//? MENU PRINCIPAL -->
const mensaje = 
    (
        '-- MENU PRINCIPAL --'                + '\n' +  
        '1 - Cargar un nuevo vehiculo'        + '\n' +  
        '2 - Buscar un vehiculo por id '      + '\n' +  
        '3 - Filtrar vehiculos'               + '\n' +  
        '4 - Modificar datos de un vehiculo'  + '\n' +   
        '5 - Ver todos los vehiculos'         + '\n' +
        'S - Salir'
    );
        

let opcion = (prompt(mensaje)).toLocaleLowerCase();
while (opcion != 's') {
    switch (opcion) {
        case '1':
            vehiculo = cargarVehiculo();
            break;
        case '2':
            if (listaVehiculos.length != 0){
                buscarVehiculoId(listaVehiculos);
            } else {
                opc = prompt('ERROR: Debe haber cargado algun un vehiculo. Desea cargar uno?\n1 - Si \n2 - No')
                if (opc == '1'){
                    vehiculo = cargarVehiculo();
                    console.log(listaVehiculos);
                } else {
                    alert('Adios...')
                }
            }
            break; 
        case '3':
            filtrarVehiculo(listaVehiculos);
            break;
        case '5':
            mostrarTodosLosVehiculos(listaVehiculos);
            break;
        default:
            break;
    }
    opcion = (prompt(mensaje)).toLocaleLowerCase();
}