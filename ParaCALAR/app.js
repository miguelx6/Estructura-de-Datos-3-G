const inventario = new Inventario(); 

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCodigo").value; 
    let nombre = document.getElementById("txtNombre").value; 
    let cantidad = document.getElementById("txtCantidad").value; 
    let costo = document.getElementById("txtCosto").value; 
    let producto = new Producto(codigo, nombre, cantidad, costo); 
    inventario.agregar(producto);
    divDetalles.innerHTML +=  "<p> Se agrego </p>"
}) 