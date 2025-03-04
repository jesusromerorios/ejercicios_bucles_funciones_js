const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
];
  
function averageMovieDuration(list) {
    let listOfDurations = [];
    let averageTime = 0;
    list.forEach(element => {
        listOfDurations.push(element.duration);
    });
    listOfDurations.forEach((element) => {
        averageTime = averageTime + element;
    })
    averageTime = averageTime / listOfDurations.length;
    return averageTime;
}

let averageDuration = averageMovieDuration(movies);
console.log(averageDuration);