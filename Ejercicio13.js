const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
];
  
function calculateActorsAges(list) {
    let curentYear = new Date();
    curentYear = curentYear.getFullYear();
    let yearsOfBirth = [];
    let actorsAge = [];
    list.forEach(element => {
        yearsOfBirth.push(element.born);
    });
    yearsOfBirth.forEach((element) => {
        let indexOfActor = yearsOfBirth.indexOf(element);
        actorsAge.push(`El actor ${list[indexOfActor].name} tiene actualmente ${curentYear - element} años`);
    })
    return actorsAge;
}

let ageOfActors = calculateActorsAges(actors);
console.log(ageOfActors);