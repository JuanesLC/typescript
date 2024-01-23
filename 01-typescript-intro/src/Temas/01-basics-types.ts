// Este signo | sirve para decirle que puede un tipo de dato o el otro

const name = 'Juanesch';
let maxAmmo: number | 'FULL' | boolean = 92;
let kill: boolean = true;


maxAmmo = "FULL"; 

console.log(
    {name, maxAmmo, kill}
    );



export{};