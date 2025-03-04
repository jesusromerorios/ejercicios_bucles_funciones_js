const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(list) {
    let baseYears = [];
    list.forEach(element => {
        baseYears.push(element.year);
    });
    baseYears.sort()
    let oldestXMen = list.filter((element) => element.year == baseYears[0] )
    return oldestXMen;
}

let firstXMen = findOldestXMen(xMen);
console.log(firstXMen);

/*
En este caso el resultado es multiple, si queremos que solo sea uno, lo ordenaria por ordena alfabetico y pasaria solo el primer resultado del array. Como lo que dice el ejercicio es que filtre para que aparezca el mas antiguo, aun siendo un resultado multiple he preferido dejarlo así.
*/