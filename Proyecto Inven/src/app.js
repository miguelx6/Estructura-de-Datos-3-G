import { Producto } from './productos.js';

import { Inventario } from './inventario.js';


const inventario = new Inventario();

function enseñarProductos() {
    inventario.ordenarLista();
    document.getElementById("product-list").innerHTML = "";

    let lista = inventario.devolverLista();

    for (let i = 0; i < lista.length; i++) {
        const listaProducto = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${lista[i].codigo}

                <strong>Nombre</strong>: ${lista[i].nombre}

                <strong>Precio</strong>: ${lista[i].precio}

                <strong>Cantidad</strong>: ${lista[i].cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}


function buscarProducto(codigo) {
    let buscar = inventario.buscarProducto(codigo);
    document.getElementById("product-list").innerHTML = "";
    const listaProducto = document.getElementById('product-list');
    const element = document.createElement('div');
    if (buscar === false) {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>No se encontro el producto</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    } else {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${buscar.codigo}

                <strong>Nombre</strong>: ${buscar.nombre}

                <strong>Precio</strong>: ${buscar.precio}

                <strong>Cantidad</strong>: ${buscar.cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}

function eliminarProducto(codigo) {
    let eliminar = inventario.eliminarProducto(codigo);
    document.getElementById("product-list").innerHTML = "";
    const listaProducto = document.getElementById('product-list');
    const element = document.createElement('div');
    if (eliminar === false) {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto no Encontrado</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    } else {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Se elimino el Producto:</strong>
            </div>
        </div>
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${eliminar.codigo}
                }
                <strong>Nombre</strong>: ${eliminar.nombre}
                }
                <strong>Precio</strong>: ${eliminar.precio}

                <strong>Cantidad</strong>: ${eliminar.cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}


document.getElementById('producto-form')
    .addEventListener('submit', function (e) {
        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const cantidad = document.getElementById('cantidad').value;

        const producto = new Producto(codigo, nombre, precio, cantidad);

        document.getElementById("product-list").innerHTML = "";
        const listaProducto = document.getElementById('product-list');
        const element = document.createElement('div');
        if (inventario.buscarProducto(codigo) === false) {
            inventario.addProducto(producto);
            enseñarProductos();
        } else {
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>El Producto Ya Esta Añadido</strong>
                    </div>
                </div>
                `;
            listaProducto.appendChild(element)
        }

        e.preventDefault();
    });

document.getElementById('producto-Eliminar')
    .addEventListener('submit', function (e) {
        const codigoEliminar = document.getElementById('codigoEliminar').value;

        eliminarProducto(codigoEliminar);

        e.preventDefault();
    });

document.getElementById('producto-Buscar')
    .addEventListener('submit', function (e) {
        const codigoBuscar = document.getElementById('codigoBuscar').value;
        buscarProducto(codigoBuscar);
        e.preventDefault();
    });

document.getElementById('producto-Mostrar')
    .addEventListener('submit', function (e) {
        enseñarProductos();
        e.preventDefault();
    });

document.getElementById('producto-invertir')
    .addEventListener('submit', function (e) {
        listarInvertido();
        e.preventDefault();
    });

    function listarInvertido() {
        document.getElementById("product-list").innerHTML = "";
        let lista = inventario.devolverLista();
        for (let i = lista.length - 1; i >= 0; i--) {
            const listaProducto = document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Codigo</strong>: ${lista[i].codigo}
    
                    <strong>Nombre</strong>: ${lista[i].nombre}
    
                    <strong>Precio</strong>: ${lista[i].precio}
    
                    <strong>Cantidad</strong>: ${lista[i].cantidad}
                </div>
            </div>
            `;
            listaProducto.appendChild(element);
        }
    }

    function listarEnlazado(){
        
    }