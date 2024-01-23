
//Public que se ve desde el mundo exterior, private nadie lo ve

export class Person {

  constructor( 
    //! POR SI EL USUARIO NO DA NINGUN VALOR 

    public firstName: string = 'No first name', 
    public lastName: string = 'No last name',
    private address: string = 'No address ',  
    public age: number = 0
    ) {}
  
}

// ! EXPANDIR CLASSES

// export class Hero extends Person{

//     //Nuevas propiedades

//     constructor(
//         public realName: string,
//         public power: string,
//         public currentAge: number,
//     ) {
//         super(realName, 'London', currentAge)
//     }
// }


export class Hero {

    

    constructor(
        public realName: string,
        public power: string,
        public currentAge: number,
        public person: Person,
    ) {
        // this.person = new Person(realName)
    }
}

const person = new Person('Juanesch', 'Lapa', 'New York'); 

const person2 = new Hero( 'Kathe', 'invisibility', 25, person);


console.log(person2);


