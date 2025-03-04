const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

function genreFilter (list) {
    let tracksGenre = [];
    let playlistByGender = [];
    list.forEach((element) => {
        if (!tracksGenre.includes(element.genre)) {
            tracksGenre.push(element.genre);
        }
    })
    tracksGenre.forEach((element) => {
        let filterPlaylist = [];
        for (const track of list) {
            if (track.genre == element) {
                filterPlaylist.push(track.title);
            }
        }
        playlistByGender.push({[element] : filterPlaylist});
    })
    return playlistByGender;
}

let sortedPlaylist = genreFilter(tracks);
console.log(sortedPlaylist);
