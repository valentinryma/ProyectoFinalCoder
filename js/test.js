v1 = {
    id: 1,
    marca: 'BMW',
    modelo: 'E36',
    traccion: 'Trasera',
    anio: 1996,
    hp: 195,
    estado: 'Usado',
    precio: 15000
}

v2 = {
    id: 2,
    marca: 'Honda',
    modelo: 'Civic',
    traccion: 'Delantera',
    anio: 1998,
    hp: 120,
    estado: 'Usado',
    precio: 12000
}

v3 = {
    id: 3,
    marca: 'Ford',
    modelo: 'Raptor',
    traccion: 'Total',
    anio: 2023,
    hp: 390,
    estado: 'Nuevo',
    precio: 70000
}

v4 = {
    id: 4,
    marca: 'Peugeot',
    modelo: '206',
    traccion: 'Delantera',
    anio: 1999,
    hp: 260,
    estado: 'Usado',
    precio: 1000
}

listaVehiculos = [];
listaVehiculos.push(v1,v2,v3,v4);

// Setear Filtros
/*
1- Configurar Filtros
2- Ver filtros activos
3- Buscar
s- Salir


0 -> marca
1 -> modelo
2 -> traccion
3 -> hp
4 -> anio
5 -> precioMin
6 -> precioMax
7 -> estado
*/


console.log(listaVehiculos[0].marca);
configFiltro = ['0', '0', '0', '0', '0', '0', '0', '0'];
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
        console.log(vehiculo);
    }
}

