class fifo{
    constructor(ciclos){
         this.sig = null;
         this.ciclos = ciclos;

    }
}

class ClaveFifo{
    constructor(){
        this.primero = null;
    }

    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
            nuevo.sig = this.primero;
        }else{
            
        }
    }
}