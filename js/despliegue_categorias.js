// JavaScript para gestionar los títulos de las categorías de filtros
const categoryTitles = document.getElementsByClassName('category-title');

for (let i = 0; i < categoryTitles.length; i++) {
    categoryTitles[i].addEventListener('click', () => {
        categoryTitles[i].classList.toggle('open');
    });
}


// JavaScript para limpiar filtros
const clearFiltersButton = document.getElementById('clearFiltersButton');
const selectYearMin = document.getElementById('select-year-min');
const selectYearMax = document.getElementById('select-year-max');

clearFiltersButton.addEventListener('click', () => {
    const inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'checkbox' || inputs[i].type === 'radio') {
            inputs[i].checked = false;
        } else if (inputs[i].type === 'number') {
            inputs[i].value = '';
        }

    }

    // Resetear la opción seleccionada en el select de año
    selectYearMin.selectedIndex = 0;
    selectYearMax.selectedIndex = 0;
});