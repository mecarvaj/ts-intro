
/*
    ===== Código de TypeScript =====
*/

//let habilidades: (boolean | string | number)[] = ['Bash','Counter','Healing', 100];
//habilidades.push(true);

let habilidades: string[] = ['Bash','Counter','Healing'];
habilidades.push('Hit');

interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Healing', 'Counter']
}

personaje.puebloNatal = 'Pueblo Paleta'
console.table(personaje);