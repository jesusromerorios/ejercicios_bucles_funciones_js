const characters = [
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
];

const humanCharacters = [];

function charactersType (charactersList, typeFilter) {
    for (const element of charactersList) {
        if (element.species == typeFilter) {
            humanCharacters.push(element);
        }
    }
    return humanCharacters;
}

let filterCharacters = charactersType(characters, "Human");
console.log(filterCharacters);