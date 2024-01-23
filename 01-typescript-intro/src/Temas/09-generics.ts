
// T quiere decir que va a depender del tipo de dato
export function whatsMyType <T>(argument: T): T {
    
    return argument
}
// Esto es para definir el tipo de dato que debe de esperar el usuario
let word = whatsMyType<string>('Holaaaam jijij');
let number = whatsMyType<number>(100);
let array = whatsMyType<number[]>([1,2,3,4,5,6]);

console.log(word.split(' '));
console.log(number.toFixed());
console.log(array.join('-'));


