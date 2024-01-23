//! Siempre : y luego poner que tipo de dato es.

function addNumbers(a:number, b:number) {
    return a + b;
}


const result:number = addNumbers(1,2)
console.log({result});


//!  FUNCIONES DE  F L E C H A
const addNumberArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

const resultAddNumber: string = addNumberArrow(3,5)
console.log(resultAddNumber);

// !para que sea opcional 

function multiplicar(first: number, second?: number, base: number = 2) {
    return first * base;
}

const showResult: number = multiplicar(80)
console.log(showResult);


function nameInLaws(a:string, b:string) {
    return a + ' ' + b; // Agrega un espacio entre las dos palabras
}

const inLaws:string = nameInLaws( "Wilson", "Maria" )
console.log(inLaws);

  //! Se define primero las caracteristicas y luego se le asigna en la funcion 

interface Character {
    name: string,
    hp: number,
    showHp: () => void  // Es decir que esta ausente, no devuelve nada
}
// character tendra las caracteristicas de Character

const healCharacter = ( character: Character, amount: number ) => {
    
    character.hp += amount;
    
}

const defender = {
    name: 'Juanesch',
    hp: 12,
    showHp() {
        console.log(`El personaje ${this.name} tiene ${this.hp} de vida`)
    },
}

healCharacter(defender, 12)
defender.showHp();



export{}