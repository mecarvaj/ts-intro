import { calcularIVA, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto [] = [
    {
        desc: 'Telefono 1',
        precio:  205
    },
    {
        desc: 'Telefono 2',
        precio:  150
    }
];

const [total, iva] = calcularIVA(carritoCompras);

console.log('Total de compra: ', total);
console.log('Total de IVA por compra: ', iva);