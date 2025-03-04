const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

function decadeFilter (list) {
    let yearsOfMovies = [];
    list.forEach(element => {
        yearsOfMovies.push(element.releaseYear);
    });
    yearsOfMovies.sort()
    let baseDecade = yearsOfMovies.slice(0, 1);
    baseDecade = baseDecade / 10;
    baseDecade = Math.floor(baseDecade);
    baseDecade = baseDecade * 10;
    yearsOfMovies.reverse()
    let currentDecade = yearsOfMovies.slice(0, 1);
    currentDecade = currentDecade / 10;
    currentDecade = Math.ceil(currentDecade);
    currentDecade = currentDecade * 10;
    let moviesList = [];
    let moviesOfTheDecade = [];

    while (baseDecade < currentDecade) {
        for (const movie of list) {
            if (movie.releaseYear >= baseDecade && movie.releaseYear < (baseDecade + 10)) {
                moviesList.push(movie.title);
            }
        }
        moviesOfTheDecade.push({[baseDecade] : moviesList});
        baseDecade = baseDecade + 10;
    }
    return moviesOfTheDecade;
}

let moviesFiltered = decadeFilter(starWarsMovies);
console.log(moviesFiltered);
