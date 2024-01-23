
const skill: string[] = ['Counter','Healing', 'Power']

// !Esto es para declarar los tipos de datos de const o let

interface Character {
    name: string;
    hp: number;
    skills: string [];
    townhall?: string;    // Es decir que el townhall es opcional,puede existir o no
}
// !Siempre asignar el interface a la variable para que tome los tipos de datos asignados.

const personaje: Character ={
    name:'Juanesito y Katherin',
    hp: 12,
    skills: ['Power', 'Healing'],
    
}

// Esto es para decirle que existe
personaje.townhall = 'TH11';

console.table(personaje);


export {};