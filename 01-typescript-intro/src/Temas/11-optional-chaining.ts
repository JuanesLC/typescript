 
 
 export interface Passenger {
    name: string;
    children?: string[];
}

const passengerOne: Passenger = {
    name: 'Juanesch',
} 

const passengerTwo: Passenger = {
    name: 'Katherin',
    children: ['Alena', 'Kathe'],
} 

const printChildren = ( passenger: Passenger) => {

    //CUANDO SE QUE SIEMPRE VOY A RECIBIR UN HIJO
    // if (!passenger.children) return 0;
    
    // PARA DFEINIR SI CHILDREN EXISTE, ENTONCES REGRESE CUANTOS HIJOS TIENE
    const howManyChildren = passenger.children?.length || 0;


    //    CUANDO SE QUE SIEMPRE VOY A RECIBIR UN HIJO
    // const howManyChildren = passenger.children!.length

    console.log( passenger.name, howManyChildren);
    
}

printChildren(passengerTwo)