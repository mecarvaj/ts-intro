interface Pasajero {
    nombre: string;
    hijos?: string[]
  }
  
  const pasajero1: Pasajero = {
    nombre: "Fernando"
  }
  
  const pasajero2: Pasajero ={
    nombre:"Melissa",
    hijos: ['Natalia', 'Gabriel']
  }
  
  function imprimerHijos (pasajero: Pasajero): void {
    //Aca sucede la condicion de encadenar si no es undefined
    const cuantoshijos = pasajero.hijos?.length || 0; 
  
  
    console.log(cuantoshijos);
  }
  
  imprimerHijos(pasajero1);