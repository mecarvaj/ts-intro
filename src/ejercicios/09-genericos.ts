function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString= queTipoSoy('hola mundo');
let soyNumero = queTipoSoy(100);
// let soyExplicito = queTipoSoy<number>('Error');
let soyExplicito = queTipoSoy<number>(100);