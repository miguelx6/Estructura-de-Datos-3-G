// 3.- Intercambia(dato1, dato2) va a encontrar los nodos que contienen esos datos, en caso de existir, deberá intercambiarlos dentro de la lista (no modificar el dato del nodo), lo hace con la primer aparicion de cada dato buscado
// ejemplo:
// primero=(esta)->(es)->(una)->(frase)->(cualquiera)->(sin)->(sentido)
// intercambia('es','sin')= el resultado será
// primero=(esta)->(sin)->(una)->(frase)->(cualquiera)->(es)->(sentido) //no se cambia el contenido del dato del nodo, sino  que el nodo completo se reenlaza acorde a lo que le corresponde.

// 4.- EliminarDeAtras(dato) elimina la última ocurrencia que exista de el dato, es decir, hace la eliminación pero de atras hacia adelante.
// ejemplo:
// primero=(esta)->(es)->(una)->(frase)->(cualquiera)->(sin)->(sentido)->(sin)->(explicacion)->(sin)->(razon)

// eliminarDeAtras('sin')//elimina la ultima aparicion de sin, que esta antes de razon.
// primero=(esta)->(es)->(una)->(frase)->(cualquiera)->(sin)->(sentido)->(sin)->(explicacion)->(razon)

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
            cadena = cadena + " -> " + aux.numero;
            aux = aux.next;
        }
        return cadena;
    }

    extrarPrimero(){
        let aux = this.primero;
        this.primero = this.primero.next
        return aux;
    }

    extrarUltimo(){
        let ultimo = this.ultimo();
        let aux = this.primero;
        while(aux.next != ultimo){
            aux = aux.next;
        }
        aux.next = null;
        return ultimo;
    }

    ultimo(nodo = this.primero){
        if(nodo.next){
            return this.ultimo(nodo.next)
        }
        return nodo;
    }

    intercambio(dato1, dato2){
        let 
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
num = new Nodo(7)
datos.agregarInicio(num);


console.table(datos);
console.table(datos.listar());
console.log(datos.extrarPrimero());