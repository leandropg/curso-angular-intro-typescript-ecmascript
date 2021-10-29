interface PlayerMusic {

    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    
    author: string;
    year: number;
}

let playerMusic: PlayerMusic = {

    volume: 90,
    second: 36,
    song: 'My favorite song',
    details: {

        author: 'My favorite Author',
        year: 1990
    }
}

const { song, details, volume: myVolume } = playerMusic;
const { author } = details;
console.log('Author: ', author, ' Song: ', song, ' Volume: ', myVolume);

// Destructuring Array
const cities: string[] = ['Bogota', 'Medellin', 'Cali'];
const [ c1, c2, c3 ] = cities;  // const [ , , c3 ] = cities
console.log('Ciudad 1:', c1);
console.log('Ciudad 2:', c2);
console.log('Ciudad 3:', c3);