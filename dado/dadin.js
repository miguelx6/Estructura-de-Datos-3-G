class Dado{
    Lanzar(){
        return Math.floor(Math.random() * 6 ) + 1;

    }
}

const dado1 = new Dado();
const dado2 = new Dado();

let vec = [suma-2]++

let suma = dado1.Lanzar() + dado2.Lanzar();

for(let i = 0; i < 6; i++){
    vec [i] = 0;
}

for(let i = 0; i < 100; i++){
    console.log(dado1.Lanzar());
}

for(let i = 0; i < 100; i++){
    console.log(dado2.Lanzar());
}

console.log(vec);
console.log(suma);