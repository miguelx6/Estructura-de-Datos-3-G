class Dado{
    Lanzamiento(){
        return Math.floor(Math.random() * 100 ) + 1;

    }
}

class Tablero{
    constructor(Jugador1, Jugador2){
        this._Jugador1 = Jugador1;
        this._Jugador2 = Jugador2;
        this._Posiciones = [];
    }

    get getPosicion(){

    }
}