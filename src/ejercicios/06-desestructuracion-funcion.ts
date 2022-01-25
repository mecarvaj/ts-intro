export interface Producto{
    desc: string,
    precio: number
}

const telNokia: Producto = {
    desc : 'Nokia A1',
    precio: 150
}
const iphone: Producto = {
    desc : 'Iphone 12',
    precio: 350
}
 export function calcularIVA(productos: Producto[]): [number,number]{
    let total = 0;

    productos.forEach( ({precio}) => {
        total+= precio;
    });

    return [total, total * 0.13];

 }

const articulos: Producto[] = [telNokia,iphone]; 
const [total,iva] = calcularIVA(articulos);

console.log('IVA: ', iva);
console.log('Total: ', total);
