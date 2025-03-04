const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];
  
function findMutantByPower(list, power) {
    let powerList = [];
    let mutantsWithPower = [];
    let powerIndex;
    list.forEach(element => {
        powerList.push(element.power)
    });
    powerList.forEach((element) => {
        if (power == element) {
            powerIndex = powerList.indexOf(element);
            mutantsWithPower.push(`El mutante ${list[powerIndex].name} usa la habilidad ${list[powerIndex].power}`)
        }
    })

    return mutantsWithPower;
}

let findMutants = findMutantByPower(mutants, 'regeneration');
console.log(findMutants);