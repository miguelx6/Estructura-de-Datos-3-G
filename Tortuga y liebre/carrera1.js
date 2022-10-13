class Paso{
    LosPasoss(){
        return Math.floor(Math.random() * 100 ) + 1;

    }
}

class Tortuga{
    constructor(){
        this._posicion = 0;
        this._paso = new Paso();
    }
    getPosicion(){
        return this._posicion;
    }
    avanzar(){
        let paso = this._paso.LosPasoss();

        if(paso <= 50){
            this._posicion += 3;
        }else if(paso <= 70 ){
            this._posicion -= 6;
        }else{
            this._posicion += 1;
        }
    }
}

class Liebre{
    constructor(){
        this._posicion = 0;
        this._saltos = new Paso();
        
    }    
    getPosicion(){
        return this._posicion;
    }
    avanzar(){
        let salto = this._saltos.LosPasoss();
    
        if(salto <= 20){
            this._posicion == 0;
        }else if(salto <= 40){
            this._posicion += 9;
        }else if(salto <= 50 ){
            this._posicion -= 12;
        }else if(salto <= 85){
            this._posicion += 1;
        }else{
            this._posicion -= 2;
        }
    }
    
}

class carrera{
    constructor(tortuga, liebre){
     this._tortuga = tortuga;
     this._liebre = liebre;
    }
 
}

let tortuga = new Tortuga(3);

let liebre = new Liebre(8);

while (liebre.getPosicion() <= 100 && tortuga.getPosicion() <= 100) {
    liebre.avanzar();
    tortuga.avanzar();

    if (tortuga.getPosicion() > 100) {
        return tortuga.getPosicion();
    }
    console.log(`Tortuga: Posición ${tortuga.getPosicion()}`)
    if (liebre.getPosicion() > 100) {
        return liebre.getPosicion();
    }
    console.log(`Liebre: Posicion ${liebre.getPosicion()}`)

    if (liebre.getPosicion() > tortuga.getPosicion()) {
        console.log('La Liebre quedo primero');
    }else if (tortuga.getPosicion() === liebre.getPosicion()) {
        console.log('Empate');
    }else{
        console.log('La Tortuga quedo primero');
    }

}
