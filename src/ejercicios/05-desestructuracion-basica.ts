interface Reproductor{
    volumen: number,
    segundo:number,
    cancion:string,
    detalle: Detalle
}
interface Detalle{
    autor: string,
    anio:string
}
const reproductor: Reproductor = {
    volumen : 90,
    segundo : 45,
    cancion : 'November rain',
    detalle : {
        autor : 'Linking Park', 
        anio : '1998'
    }
}
/*
//Desestructuración de un objeto {}
const {volumen,segundo,cancion,detalle} = reproductor
const {autor} = detalle
console.log('El volumen actual es de: ' +volumen);
console.log('El segundo actual es de: ' +segundo);
console.log('la canción actual es de: ' +cancion);
console.log('El autor actual es de: ' +autor);
*/

//Desestructuración de un arreglo []

const dbz: string[] = ['Goku', 'Vegueta', 'Krillin','Trunks'];
const [p1, p2, , p4] = dbz


console.log('Personaje 1: ' ,p1);
console.log('Personaje 2: ' ,p2);
console.log('Personaje 3: ' ,p4);