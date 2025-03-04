const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};


function getCapital(country) {
    let listOfCountries = Object.keys(capitals);
    let capitalOfCountry = Object.values(capitals);
    let countryId;
    listOfCountries.forEach(element => {
        if (country == element) {
            countryId = listOfCountries.indexOf(element);
            capitalOfCountry = capitalOfCountry[countryId];
        }
    });
    return capitalOfCountry;
}

let capitalOf = getCapital('Spain');
console.log(capitalOf);