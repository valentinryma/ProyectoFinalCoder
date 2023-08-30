// JavaScript para gestionar los títulos de las categorías de filtros
const categoryTitles = document.querySelectorAll('.category-title');

categoryTitles.forEach(categoryTitle => {
    categoryTitle.addEventListener('click', () => {
        categoryTitle.classList.toggle('open');
    });
});


// JavaScript para limpiar filtros
const clearFiltersButton = document.getElementById('clearFiltersButton');
const selectYearMin = document.querySelector('.select-year[name="select-year-min"]');
const selectYearMax = document.querySelector('.select-year[name="select-year-max"]');

clearFiltersButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else if (input.type === 'number') {
            input.value = '';
        }
    });
    
    // Resetear la opción seleccionada en el select de año
    selectYearMin.selectedIndex = 0;
    selectYearMax.selectedIndex = 0;
});