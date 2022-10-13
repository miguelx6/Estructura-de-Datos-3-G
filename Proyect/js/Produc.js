class Producto {
    #codigo = 0;
    #nombre = "";
    #cantidad = 0;
    #costo = 0;
  
    constructor(
      codigo = 0,
      {
        nombre,
        cantidad,
        costo
      }
    ){
      this.#codigo = codigo;
      this.#nombre = nombre;
      this.#cantidad = Number(cantidad);
      this.#costo = Number(costo);
    }
  
    get getNombre(){ return this.#nombre; }
    get getFullValue (){
      return{
        codigo: this.#codigo,
        nombre: this.#nombre,
        cantidad: this.#cantidad,
        costo: this.#costo
      }
    }
    set setFromObj({nombre, cantidad, costo}) {
      this.#nombre = nombre;
      this.#cantidad = cantidad;
      this.#costo = costo;
    } 
  }
  
  modules.export = Producto;