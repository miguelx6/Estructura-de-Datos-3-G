class Proceso{
    constructor(ciclos){
        this.ciclos = ciclos;
        this.sig = null;
        this.ant = null;
        
    }
}

class ListaCircular{
    constructor(){
        this.primero=null
    }
    agregar(nuevo){}
}

let ciclosVacios = 0;
let procesosTerminados = 0;
let procesos = new ListaCircular();
for(let i = 1;i<= 300;i++){
    let probabilidad= Math.floor(Math.random()*100+1);
    if (probabilidad < 40){
        let ciclos = Math.ceil(Math.random()*11)+4;
        let nuevo = new Proceso()
        procesos.agregar(nuevo);
    }
    if(procesos.actual.ciclos== 0){
        procesosTerminados++;
        procesos.extraerActual();
    }else{
        procesos.cambiarActual();
    }
}