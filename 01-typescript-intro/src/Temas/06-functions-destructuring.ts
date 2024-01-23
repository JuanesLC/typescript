
export interface Product {
    description: string,
    price: number,
}
//!Evitar poner esto
// const phone: Product = {
//     description: 'iPhone 13',
//     price: 800
// }

// const tablet: Product = {
//     description: 'iPad Pro 1st generation',
//     price: 1000.00
// }

// const airPods: Product = {
//     description: 'Airpods Pro',
//     price: 150.0
// }

interface taxesProperties {
    tax: number,
    products: Product[]
}

 // 
    export function calculateTaxes ( properties: taxesProperties): [number, number]{
        //Para que tome el tax y el products 
        const { tax, products } = properties

        let total = 0;

    products.forEach( ({ price }) => {
        // total = total + price      ES LO MISMO
        total += price;
    });

    return [total, total *tax]
}



// const shoppingCart = [phone, tablet, airPods];
// const taxes = 0.15;


// const [result, tax] = calculateTaxes({ tax: taxes, products: shoppingCart});


// console.log('Total:', result);
// console.log('Taxes:', tax);





