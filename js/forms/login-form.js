const formularioLogin = document.getElementById('iniciar-sesion');
const username = document.getElementById('form-username');
const password = document.getElementById('form-pwd');

// Datos del Formulario
formularioLogin.addEventListener('submit', (e) => {
    //* Simula la creacion de un Usuario, el usuario creado no persiste ya que no se puede editar el user.json que simula la db
    // Se podria hacer una copia en el localStorage, como con los vehiculos, pero estaria visible a todos y no seria lo optimo.
    e.preventDefault(); // No envia el form.

    let rol = "";
    let foto = "";

    const userEncontrado = usuarios.find((usuario) => (usuario.username == username.value));
    if (userEncontrado != undefined) {
        if (userEncontrado.username == username.value && userEncontrado.password == password.value) {
            console.log('Correcto');
        }
        else {
            console.log('Incorrecto');
        }
    } else {
        console.log('No existe')
    }

    if (userEncontrado != undefined) {
        if (userEncontrado.username == username.value && userEncontrado.password == password.value) {
            rol = userEncontrado.rol;
            foto = userEncontrado.foto;
            localStorage.setItem('rol', rol);
            localStorage.setItem('foto', foto);
            Swal.fire({
                title: `Inicio de sesion correcto...`,
                text: `Rol asignado:  ${(localStorage.getItem('rol')).toUpperCase()}`,
                showConfirmButton: false,
                imageUrl: `${foto}`,
                imageWidth: 200,
                imageHeight: 200,
                timer: 2000
            })
            // Reedirecciona a la pagina principal
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000);
        } else {
            Swal.fire(
                'Error 💀',
                'Usuario o contraseña incorrecta...',
                'error'
            )
        }
    } else {
        Swal.fire(
            'Error 💀',
            'Usuario o contraseña incorrecta...',
            'error'
        )
    }
});

const login = () => {
    asignarFtUsuario();
    time();
    obtenerUsers();
}

login();