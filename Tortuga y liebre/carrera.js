class Dado {
    lanzar(){
        return Math.floor((Math.random()) * 6) + 1;
    }
}

class Carrera{
    constructor(tortuga, liebre){
        this.tortuga =  tortuga;
        this.liebre =  liebre;
    }

    iniciar(){
        do {
            this.jugador1.correr()
            
        } while (condition);
    }

}

class tortuga{
    constructor(){
        this.posicion = 0;
        this.Dado = new Dado();
    }

    getPosicion(){
        return this.posicion
    }
    avanzar(){
        let Dado = this.Dado.DarPasos();

        if(paso <= 50){
            this.posicion += 3;
        }else if
    }
}