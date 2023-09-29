const formularioSigin = document.getElementById('crear-cuenta');
const createUsername = document.getElementById('form-create-username');
const createPassword = document.getElementById('form-create-pwd');
const createRepeatPassword = document.getElementById('form-create-repeat-pwd');
const createFotoUser = document.getElementById('form-create-foto-user');

formularioSigin.addEventListener('submit', (e) => {
    e.preventDefault();
    usuarios = [];
    obtenerUsers();
    foto = createFotoUser.value;
    if (createPassword.value != createRepeatPassword.value) {
        Swal.fire(
            'Error 💀',
            'Las contraseñas no coinciden...',
            'error'
        )

    } else if (createPassword.value.length < 8) {
        Swal.fire(
            'Error 💀',
            'La contraseña debe tener al menos 8 caracteres...',
            'error'
        )
    } else {
        localStorage.setItem('rol', 'user');
        localStorage.setItem('foto', foto);

        Swal.fire({
            title: `Cuenta registrada con exito...`,
            text: `Rol asignado:  user`,
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
    }
})

