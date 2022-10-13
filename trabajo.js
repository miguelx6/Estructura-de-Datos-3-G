// function x (n){
//     if (n === 1) return 0;
//     if (n === 2) return 1;
//     if ( n > 2) return (x(n-1) + x(n-2));
        
// }

// for(let i = 1; i <= 15; i++){
//     console.log(x(i));

// }

// let nuevo =  new Nodo(4);
// agregar(primero, nuevo);

// function agregar(nodoIni, nuevo){
//     if(nodoIni == null){
//         nodoIni =  nuevo;
//     }else{

//         let aux = nodoIni;
//         while (aux.next != null){}
//         aux =  aux.next;
//         aux.next = nuevo;
//     }
// }

function agregateRec(nuevo, nodox){
    if(nodox.next == null)
    nodox.next = nuevo;

    else{
        agregateRec(nuevo, nodox.next);
    }
}