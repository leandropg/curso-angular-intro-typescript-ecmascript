/*
    ===== Código de TypeScript =====
*/
let skills: string [] = ['C', 'Javascript', 'Typescript'];

interface Player {

    name: string,
    points: number,
    skills: string[]
    phone?: number
}

const player : Player = {

    name: "Leandro",
    points: 100,
    skills: ['C', 'Javascript', 'Typescript']
}
player.phone = 6015553322;
console.table(player);