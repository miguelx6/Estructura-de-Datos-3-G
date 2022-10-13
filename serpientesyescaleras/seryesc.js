class Paso{
    LosPasoss(){
        return Math.floor(Math.random() * 100 ) + 1;

    }
}

class Jugador1{
    constructor(){
        this._posicion = 0;
        this._paso = new Paso();
    }
   get getPosicion(){
        return this._posicion;
    }
    avanzar(){
        let paso = this._paso.LosPasoss();

        if(paso <= 50){
            this._posicion += 3;
        }else if(paso <= 98 ){
            this._posicion -= 6;
        }else{
            this._posicion += 1;
        }
    }
}

class Jugador2{
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
    constructor(Jugador1, Jugador2){
     this._Jugador1 = Jugador1;
     this._Jugador2 = Jugador2;
    }
 
}

let Jugador1 = new Jugador1(0);

let Jugador2 = new Jugador2(0);

while (Jugador2.getPosicion() <= 100 && Jugador1.getPosicion() <= 100) {
    Jugador2.avanzar();
    Jugador1.avanzar();

    if (Jugador1.getPosicion() > 100) {
        return Jugador1.getPosicion();
    }
    console.log(`Jugador1: Posición ${Jugador1.getPosicion()}`)
    if (Jugador2.getPosicion() > 100) {
        return Jugador2.getPosicion();
    }
    console.log(`Jugador2: Posicion ${Jugador2.getPosicion()}`)

    if (Jugador2.getPosicion() > Jugador1.getPosicion()) {
        console.log('El Jugador2 gano');
    }else{
        console.log('El Jugador1 gano');
    }

}
