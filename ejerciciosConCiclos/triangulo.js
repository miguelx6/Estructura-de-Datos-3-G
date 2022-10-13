class triangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;

    }

    getArea(){
        let area = ((this.base * this.altura) / 2);

        return area;
    }

}

let triangulo1 = new triangulo (5,10)

console.log(triangulo1.getArea());