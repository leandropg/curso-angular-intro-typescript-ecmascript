export interface Product {

    description: string;
    price: number;
}

const tablet: Product = {

   description: 'Tablet',
   price: 500000
}

const phone: Product = {

   description: "Phone",
   price: 400000
}

const cart = [ tablet, phone ];

export function calculateTaxes(products: Product []) : [number, number] {

   let total: number = 0;

   products.forEach(({ price }) => {

       total += price;
   });
   return [total, total * 0.19];
}

const [total, iva] = calculateTaxes(cart);
console.log('Total: ', total);
console.log('IVA: ', iva);