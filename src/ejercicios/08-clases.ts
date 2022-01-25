
class PersonaNormal {
    
    constructor (
        nombre: string,
        direccion: string
    ){}
}

class Heroe extends PersonaNormal{
    // private alterEgo: string;
    // public edad: number;
    // static nombreReal: string;
    
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super(nombreReal,'NY, USA');
    }
}

const ironman = new Heroe('IronMan', 45, 'Tony');

console.log(ironman);