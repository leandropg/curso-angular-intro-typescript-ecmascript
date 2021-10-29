/*
    ===== Código de TypeScript =====
*/
interface SuperHero {

    name: string;
    age: number;
    direction: Direction;
    showDirection: () => string;
}

interface Direction {

    street: string;
    country: string;
    city: string;
}

const superhero: SuperHero = {

    name: "Spiderman",
    age: 30,
    direction: {

        street: "Main St",
        country: "USA",
        city: "NY"
    },
    showDirection() { 
    
        return (this.name + ' lives on ' + this.direction.city)
    }
};

console.log(superhero.showDirection())