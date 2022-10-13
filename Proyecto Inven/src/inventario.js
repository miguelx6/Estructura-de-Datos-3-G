export class Inventario {
    constructor() {
        this.listaProductos = [];
    }
    addProducto(producto) {
        this.listaProductos.push(producto);
    }

    ordenarLista() {
        for (let i = 0; i < this.listaProductos.length; i++) {
            for (let k = 0; k < this.listaProductos.length; k++) {
                if (Number(this.listaProductos[i].codigo) < Number(this.listaProductos[k].codigo)) {
                    let auxiliar = this.listaProductos[i];
                    this.listaProductos[i] = this.listaProductos[k];
                    this.listaProductos[k] = auxiliar;
                }
            }
        }
    }

    retornarLista() {
        return this.listaProductos;
    }

    quitarProducto(codigo) {
        let producto = false;
        for (let i = 0; i < this.listaProductos.length; i++) {
            let auxiliar = this.listaProductos[i].codigo;
            if (Number(auxiliar) === Number(codigo)) {
                producto = this.listaProductos[i];
                let auxiliar = this.listaProductos[i];
                for (let k = i; k < this.listaProductos.length - 1; k++) {
                    this.listaProductos[k] = this.listaProductos[k + 1];
                }
                this.listaProductos[this.listaProductos.length - 1] = auxiliar;
                this.listaProductos.pop();
            }
        }
        return producto;

    }

    buscarProductos(codigo) {
        let productos = false;
        let inicio = 0;
        let fin = this.listaProductos.length - 1;
        let laMitad = Math.floor((inicio + fin) / 2);
        while (inicio <= fin) {
            if (Number(this.listaProductos[laMitad].codigo) === Number(codigo)) {
                productos = this.listaProductos[laMitad];
                break;
            } else if (Number(this.listaProductos[laMitad].codigo) < Number(codigo)) {
                inicio = laMitad + 1;
            } else {
                fin = laMitad - 1;
            }
            laMitad = Math.floor((inicio + fin) / 2);
        }
        return productos;
    }
}