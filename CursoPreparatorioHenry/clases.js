// clases en javascript

// al declarar una clase la primera letra del nombre de la clase siempre debe ir en mayuscula
function Auto(puertas, color, marcas, año, ruedas) {
    this.puertas = puertas,
    this.color = color,
    this.marca = marcas,
    this.año = año,
    this.ruedas = ruedas,
    this.informacion = function(){
        console.log('Este es un ' + this.marca + ' con ' + this.ruedas + ' ruedas')
    }
}
// la palabra clave new es una palabra reservada que nos permite tomar como plantilla la funcion que le proporcionemos para poder crear diferentes objetos de la misma clase.
var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2023, 4)

/* console.log(miPrimerAuto)
console.log(miPrimerAuto.marca)
miPrimerAuto.informacion() */

//      hay dos tipos de sintaxis para funciones: funcion constructora y expresion de clase

/* class Auto2{
    constructor(puertas, color, marcas, año, ruedas){
    this.puertas = puertas,
    this.color = color,
    this.marca = marcas,
    this.año = año,
    this.ruedas = ruedas,
    this.informacion = function(){
        console.log('Este es un ' + this.marca + ' de color ' + this.color + ' y tiene ' + this.ruedas + ' ruedas')
    }
    }    
}

var miSegundoAuto = new Auto2(4, 'Blanco', 'Fiat', 2015, 4);

console.log(miSegundoAuto)
miSegundoAuto.informacion() */


// Palabra reservada "This" 

class football{
    constructor(jugador){
        this.jugador = jugador
    }

    obtenerNombre() {
        console.log(this.jugador)
    }
}

var argentina = new football('Messi')
var Brasil = new football('Pele')

argentina.obtenerNombre();
Brasil.obtenerNombre();