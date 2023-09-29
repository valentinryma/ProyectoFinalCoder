inicializarUsuarios();

function inicializarUsuarios() {
    obtenerUsers();
    usuarios = []; // GLOBAL    
}

function obtenerUsers() {
    const URLUSERS = "/users.json";
    fetch(URLUSERS)
        .then((resultado) => resultado.json())
        .then((data) => {
            const users = data.users;
            for (const usuario of users) {
                usuarios.push(usuario);
            }
        })
}
