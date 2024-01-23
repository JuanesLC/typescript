interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    nameSong: string;
    details: Details
}

interface Details {
    author: string;
    album: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 20,
    songDuration: 120,
    nameSong: "Looking for Katherin",
    details: {
        author: "Juan",
        album: "My first album",
        year: 2024
    }
}

// ! Para extraer datos 

const nameSong = 'New song';

const { nameSong: anotherSong, songDuration: duration, details} = audioPlayer;

const { album } = details;


console.log('Song: ', anotherSong) ;
console.log('Duration: ', duration);
console.log('Album: ', album);




// ! Para destructurar datos de arrays
// La coma es para ignorar posiciones

const [, , p2 = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];


console.log('Personaje 3:', p2);



export{}