import { Product, calculateTaxes } from './06-desestructuracion-funcion';

console.log('Execute All code from 06-desestructuracion-funcion by the IMPORT');
const cart : Product [] = [
    {
        description: 'Phone',
        price: 400000
    },
    {
        description: 'Tablet',
        price: 500000
    }
];

const [ total, iva] = calculateTaxes(cart);
console.log('Total [07-import-export]: ', total);
console.log('IVA [07-import-export]: ', iva);