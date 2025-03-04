/*
DUDA!
Para este caso buscaba mostrar un resultado mas tipo lista y no tanto tipo frase. No he conseguido hacerlo dado que no se hasta donde llega el return.
*/

const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
];

let filterListOne = [];
let  filterListTwo = [];

function moviesFilter (moviesList, filter) {
    for (const element of moviesList) {
        if (element.releaseYear < filter) {
            filterListOne.push(` La pelicula ${element.title} que es del año ${element.releaseYear}`);
        } else {
            filterListTwo.push(` La pelicula ${element.title} que es del año ${element.releaseYear}`);
        }
    }
    return `
    Las peliculas creadas antes del año ${filter} son:
    ${filterListOne}
    Las peliculas creadas despues del año ${filter} son: 
    ${filterListTwo}
    `;
}

let listaFiltrada = moviesFilter(movies, 2000);
console.log(listaFiltrada);