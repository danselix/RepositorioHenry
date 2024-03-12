class Persona {
    constructor (nombre, edad){
        this.nombre = nombre 
        this.edad = edad
        }

    saludar (){
        console.log('Hola mi nombre es ' + this.nombre + ', tengo ' + this.edad)
    }
    }


class Programador extends Persona {
    constructor (nombre, edad, añosDeExperiencia) {
        super(nombre, edad)
        this.añosDeExperiencia = añosDeExperiencia
    }

    codear (){
        console.log('Soy ' + this.nombre + '. codeo dese hace ' + this.añosDeExperiencia + ' año.')
    }
}

martin = new Persona('Martin', 26) 
martin.saludar()

Danselix95 = new Programador('Daniel', 28, 1)
Danselix95.saludar()
Danselix95.codear()


// las extensiones son utiles cuando necesitamos que una nueva instancia comparta ciertas propiedades, metodos o funciones de una clase ya existente, ahorrandonos multiples lineas de codigo
// que nos permite?

// entidades relacionadas a nuestro codigo
// extender mas de una vez
// codigo mas consistente