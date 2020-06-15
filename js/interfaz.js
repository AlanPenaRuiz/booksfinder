class Interfaz {
    constructor() {
        // Inicializa la app al instanciar
        this.init();
        // Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    // Método para cuando inicialice la app
    init() {
            // Llamar a imprimir categorias de la REST API
            this.imprimirCategorias();
        }
        // Imprimir categorias
    imprimirCategorias() {
            const listaCategorias = eventbrite.obtenerCategorias()
                .then(categorias => {
                    const cats = categorias.categorias;
                    //console.log(cats)
                    // seleccionar el select de categorias
                    const selectCategoria = document.getElementById('listado-categorias');
                    cats.forEach(cat => {
                        const option = document.createElement('option');
                        option.value = cat.nicename;
                        option.appendChild(document.createTextNode(cat.name));
                        selectCategoria.appendChild(option);
                    })
                })
        }
        // Lee la respuesta de la API e imprime los resultados
    mostrarEventos(r) {
            // leer los eventos y agregarlos a una variable
            const listaElementoss = r.r;
            listaElementoss.forEach(libro => {
                //Tags
                /*  const tags = libro.tags;
                 tags.forEach(tags => {
                         console.log(tags.name)
                     }) */
                //Imprimir plantilla
                this.listado.innerHTML += `
                    <div class="col-md-4 mb-4">
                         <div class="card">
                              <img class="img-fluid mb-2" src="${libro.cover !== null ? libro.cover : ''}"> 
                              <div class="card-body">
                                   <div class="card-text">
                                        <h2 class="">${libro.title}</h2>
                                        <p class="lead text-info">Contenido</p>
                                        <p>${libro.content_short}...</p>
                                        <p>${libro.author}</p>
                                        <span class="badge badge-primary">Paginas: ${libro.pages}</span>
                                        <span class="badge badge-secondary">Idioma: ${libro.language}</span>
                                        <a href="${libro.url_download}" target="_blank" class="btn btn-primary btn-block mt-4">Descargar</a>  
                                   </div>
                              </div>

                         </div>
                    </div>
               `;
            })


        }
        // Limpia los resultados previos
    limpiarResultados() {
        this.listado.innerHTML = '';
    }
}