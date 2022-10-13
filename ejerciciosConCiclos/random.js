class Dado {
    lanzar(){
        return Math.floor((Math.random()) * 6) + 1;
    }
}

// const es para objetos nada mas.

const dado1 = new Dado();

for(let i = 0;i < 10; i++){
    console.log(dado1.lanzar());
}
