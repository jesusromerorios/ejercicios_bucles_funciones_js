const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

function artistFilter (list) {
    let artistList = [];
    let influencesByArtist = [];
    list.forEach((element) => {
        if (!artistList.includes(element.name)) {
            artistList.push(element.name);
        }
    })
    artistList.forEach((element) => {
        let artistInfluences = [];
        for (const theArtist of list) {
            if (theArtist.name == element) {
                artistInfluences.push(theArtist.influences);
                artistInfluences = String(artistInfluences);
            }
        }
        influencesByArtist.push({[element] : artistInfluences});
    })
    return influencesByArtist;
}

let influencesFiltered = artistFilter(artists);
console.log(influencesFiltered);