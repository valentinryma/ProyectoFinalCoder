 // JavaScript para gestionar el menú desplegable del usuario
 const userToggle = document.getElementById('userToggle');
 const userMenu = document.getElementById('userMenu');
 const closeUserMenu = document.getElementById('closeUserMenu');

 userToggle.addEventListener('click', () => {
     userMenu.classList.toggle('open');
 });

 closeUserMenu.addEventListener('click', () => {
     userMenu.classList.remove('open');
 });