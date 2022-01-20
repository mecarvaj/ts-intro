
/*
    ===== Código de TypeScript =====
*/
function sumar (a: number,b: number){
    return (a+b);
}

const sumarFlecha = (a: number,b: number): number =>{
    return (a+b);
}

function multiplicar(numero: number, otroNumero?:number, base:number=2): number{
    return numero*base
}
const resultado = multiplicar(10, 12)
//const resultado = multiplicar(10, 0, 12)
console.log(resultado)


interface PersonajeWOW{
    nombre: string;
    hp: number;
    mostrarHP: () => void;
}

function curar (personaje:PersonajeWOW, hpMas: number): void{
    personaje.hp += hpMas;
    console.log(personaje)  
}

const nvoPersonaje: PersonajeWOW = {
    nombre: 'Hula',
    hp:50,
    mostrarHP() {
        console.log('Puntos de vida: '+ this.hp)
    }
}
curar(nvoPersonaje,30);
console.log(nvoPersonaje.mostrarHP());