class Nodo{
  constructor(numero){
      this.numero = numero;
      this.next = null;
  }
}

class Lista{
  constructor(){
      this.primero = null; 
  }
  
  agregar(nuevo){
      if(this.primero == null){
          this.primero = nuevo;
      }else{
          let aux = this.primero;
          while(aux.next != null){
              aux = aux.next;
              
          }
          aux.next = nuevo;
      }
  }

  agregarInicio(nuevo){
      if(this.primero == null){
          this.primero = nuevo;
      }else{
          nuevo.next = this.primero;
          this.primero = nuevo;
      }
  }

  listar(){
      let aux = this.primero;
      let cadena = "";
      while(aux){
          cadena = cadena + "-> " + aux.numero;
          aux = aux.next;
      }
      return cadena;
  }

  inverso(){
      let aux = this.primero;
      let cadena = "";
      while(aux){
          cadena = aux.numero + " -> " + cadena;
          aux = aux.next;
      }
      return cadena;
  }
}

let datos = new Lista();
let num = new Nodo(10);
datos.agregar(num);
num = new Nodo(8)
datos.agregar(num);
num = new Nodo(6)
datos.agregar(num);
num = new Nodo(4)
datos.agregarInicio(num);
num = new Nodo(100)
datos.agregarInicio(num);


console.table(datos);
console.table(datos.listar());
console.table(datos.inverso());