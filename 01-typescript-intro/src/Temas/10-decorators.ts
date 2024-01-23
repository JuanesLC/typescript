
 function classDecorator <T extends {new (...args: any []): {} }>(
    constructor: T
 ) {
    return class extends constructor {
        newProperty = 'New property';
        hello = 'Overide';
        
    };
 }
 

@classDecorator
export class SuperClass {

    
    public myProperty: string = 'Abcd12';

    print(){
        console.log('Holitas');
        
    }
}

console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass );

