class Inventario{
    constructor(){
        this.inventario = new Array(); 
    }

    agregar(producto)
    {
        this.inventario.push(producto); 
    }

    buscar(codigo)
    {
        this.inventario.forEach((producto) => {
            if(codigo === producto.getCodigo()){
                return producto; 
            } 
        });

        return null; 
    }

    eliminar(codigo)
    { 
        let aux = 0; 
        this.inventario.forEach((producto, i) => {
            if(codigo === producto.getCodigo())
            {
                aux = producto[i]; 
                for(let j = i; j < this.inventario.length; j += 1)
                {
                    producto[j-1] = producto[j];
                }
            }  
        });

        this.inventario.pop(); 
    }

    agregar()
    {

    }

    listar()
    {

    }
}
