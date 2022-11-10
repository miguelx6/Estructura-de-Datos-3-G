class Nodo{
    constructor(dato){
      this.dato=dato;
      this.sig=null;
      this.ant=null;
    }
  }
  class ListaCirc{
    constructor(){
      this.primero=null;
    }
    agregar(nuevo){
        if(this.primero ==null){
            this.primero=nuevo;
            nuevo.sig=this.primero;
            nuevo.ant=this.primero;
        }else{
            nuevo.sig=this.primero;
            nuevo.ant=this.primero.ant;
            this.primero.ant=nuevo
            nuevo.ant.sig=nuevo;
        }
    }

    extraerInicio(){

    }
  }

  let datos = new Lista();
let num = new Nodo(10);
datos.agregar(num);
num = new Nodo(9)
datos.agregar(num);
num = new Nodo(6)
datos.agregar(num);
  