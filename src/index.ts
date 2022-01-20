interface Producto{
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
 function calcularIVA(productos: Producto[]){
    let total = 0;
    productos.forEach( (producto:Producto) => {
        total+= producto.precio;
    });

    return total * 0.13;

 }

const articulos: Producto[] = [telNokia,iphone]; 
const iva = calcularIVA(articulos);