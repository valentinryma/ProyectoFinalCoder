const formularioLogin = document.getElementById('iniciar-sesion');

// Datos del Formulario
formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault(); // No envia el form.
    const opciones = document.getElementsByName("rol");
    const avisoEnvioCorrecto = document.getElementById('notificacionEvioCorrecto');
    let rol = "";

    // Recorre la lista de elementos de radio y encuentra el que está seleccionado.
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            rol = opciones[i].value;
            break;
        }
    }

    if (rol != '') {
        localStorage.setItem('rol', rol);
        Swal.fire({
            icon: 'success',
            title: `Rol ${localStorage.getItem('rol')} asignado correctamente`,
            text: 'Será redireccionado...',
            showConfirmButton: false,
            timer: 2000
        })
        // Reedirecciona a la pagina principal
        setTimeout(function () {
            // Cambia la URL actual a la URL de destino.
            window.location.href = "index.html";
        }, 2000);
    } else {
        Swal.fire(
            'Error 💀',
            'Por favor elija una opcion...',
            'error'
        )
    }
});
