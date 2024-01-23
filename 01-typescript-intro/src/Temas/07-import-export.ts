//! Estos son metodos para exportar los archivos de la clase 06


import { Product, calculateTaxes } from './06-functions-destructuring';

const shoppingCart: Product [] = [
    {
        description: 'iPhone',
        price: 2200.05,
    },

    {
        description: 'iPad',
        price: 1300,
    },

    {
        description: 'Airpods',
        price: 2300,
    },

    
];


const [ total, tax ] = calculateTaxes   ({ 
    tax: 0.15,
    products: shoppingCart
})

console.log('Total: ', total);
console.log('Taxes: ', tax);

 