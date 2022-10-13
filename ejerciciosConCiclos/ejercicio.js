class Dado {
    lanzar(){
        return Math.floor((Math.random()) * 6) + 1;
    }
}

class Carrera{
    constructor(jugador1, jugador2){
        this.jugador1 =  jugador1;
        this.jugador2 =  jugador2;
    }

    iniciar(){
        do {
            this.jugador1.correr()
            
        } while (condition);
    }

}

class Corredor{
    
    constructor(numeroJugador){
        
        this.numeroJugador = numeroJugador;
        this.Dado = new Dado();
        this.posicion = 0;

    }

    correr(){
        const pasos = {
            1: 3,
            2: 1,
            3: 1,
            4: 2,
            5: 2,  
            6: 2.
        }

        let nPasos = pasos[this.Dado.lanzar()];
        this.posicion += nPasos;

    }

}

const correr =  new Corredor();