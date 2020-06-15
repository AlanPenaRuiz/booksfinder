class EventBrite {
    constructor() {

    }

    //Obtiene categorias en init()
    async obtenerCategorias() {
        // Consultar las categorias a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.etnassoft.com/api/v1/get/?get_categories=all`);

        // Resperar la respuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();
        // devolvemos el resultado
        return {
            categorias
        }
    }
    async obtenerCatSelect(catselect) {
        const respuestaCategorias = await fetch(`https://www.etnassoft.com/api/v1/get/?category=${catselect}&criteria=most_viewed`);

        // esperar la respuesta del evento y devolverlo como JSON
        const r = await respuestaCategorias.json();
        //console.log(rCategoria)
        return {
            r
        }
    }
    async obtenerlibro(nombre) {
        const respuestaEvento = await fetch(`https://www.etnassoft.com/api/v1/get/?book_title=${nombre}`);

        // esperar la respuesta del evento y devolverlo como JSON
        const r = await respuestaEvento.json();
        return {
            r
        }
    }

}