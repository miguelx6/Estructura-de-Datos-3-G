// Usando este código, resolver los métodos
// extraerPrimero()
// extraerUltimo()
// que deberan devolver el primero  y ultimo elemento, pero además quitarlos de la lista.
 
 class Nodo{
    constructor(numero){
      this.numero=numero;
      this.next=null;
    }
  }
  class Lista{
    constructor(){
      this.primero=null;
    }
    agregar(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
        let temp=this.primero;
        while (temp.next!=null)
          temp=temp.next;
        temp.next=nuevo;
      }
    }
    listar(){
      let res="";
      let temp=this.primero;
      while(temp!=null){
          res+=temp.numero + "  ";
          temp=temp.next;
      }
      return res;
    }
  }
 
  let datos=new Lista();
  let num=new Nodo(2);
  datos.agregar(num);
  num=new Nodo(3);
  datos.agregar(num);
  num=new Nodo(4);
  datos.agregar(num);
  num=new Nodo(5);
  datos.agregar(num);
  num=new Nodo(8);
  datos.agregar(num);
  let first=datos.extraerPrimero(); //elimianr el primero
  console.log(first.numero);
  let last=datos.extraerUltimo(); //elimianr y devolver el ultimo
  console.log(last.numero);
  console.log(datos.listar());
