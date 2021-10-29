interface Product {

    descrption: string;
    price: number;
}

const tablet: Product = {

   descrption: 'Tablet',
   price: 500000
}

const phone: Product = {

   descrption: "Phone",
   price: 400000
}

const cart = [ tablet, phone ];

function calculateTaxes(products: Product []) : [number, number] {

   let total: number = 0;

   products.forEach(({ price }) => {

       total += price;
   });
   return [total, total * 0.19];
}

const [total, iva] = calculateTaxes(cart);
console.log('Total: ', total);
console.log('IVA: ', iva);