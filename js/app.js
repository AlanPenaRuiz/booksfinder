// instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // Leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    //console.log(categoriaSeleccionada)


    if (textoBuscador !== '') {
        ui.limpiarResultados();
        ////Buscador nombre
        eventbrite.obtenerlibro(textoBuscador)
            .then(r => {
                console.log(r)
                ui.mostrarEventos(r);
            })
    } else {
        ui.limpiarResultados();
        ////Categorias
        eventbrite.obtenerCatSelect(categoriaSeleccionada)
            .then(r => {
                console.log(r)
                ui.mostrarEventos(r);
            })
    }
})