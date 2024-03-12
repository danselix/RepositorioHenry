var deportes = {
    conBalon: ['Football', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking']
};

var persona = {
    nombre : "Lucas",
    edad : 26,
    estudios : {esProgramador: true}

};

//console.log(persona.edad);  
 
//persona.nombre = "Martin"
//console.log(persona.nombre)
//persona.edad = 32
//console.log(persona.edad)

var autos = {}
autos.marcas = ["Ford", 'Audi', 'Ferrari'];
autos.colores = ["Rojo", "Verde", 'Azul', 'Amarillo', 'Negro']
//console.log(autos)
delete autos.marcas
//console.log(autos)

var misFunciones = {
    saludar: function(){
        console.log('Hola')
    },
    despedirse: function(){
        console.log('Adios')
    }
}

// misFunciones.saludar();
// misFunciones.despedirse();


var atuendos = {
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes']
}
//Ejemplo de Dot-notation. hace referencia a el tipo de acceso por medio de puntos a las propiedades de un objeto.
//console.log(atuendos.manos);

//Braket-notation. hace referencia a el acceso y escritura de datos por medio de barra inclinadas.
atuendos ['pierna'] = ['Bermudas', 'Pantalones']
var comidas ={}
var diferenciaDeNotaciones = function(propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales']
    comidas[propDos] = ['Hamburguesas', "Papas fritas"]
}


diferenciaDeNotaciones("saludables","noSaludables")
// console.log(comidas)

/* METODOS Objetos Avanzados */

/* hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false. */
var libros = {autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libros.hasOwnProperty('año')
// console.log(tienePropiedad)

/* Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo. */
var todasLasPropiedades = Object.keys(libros)
// console.log(todasLasPropiedades)

//          bucle for in 

var mundo = {continentes: 7, paises: 195,oceanos: 5}

/* for (var prop in mundo) {
    console.log('esta es la propiedad: ' + prop)
    console.log('este es el valor: ' + mundo[prop])
} */

// la principal diferencia entre los bucles for y for in esta en el hecho de que el bucle for solo sirve para recorrer arreglos, y el bucle for in sirve solamente para recorrer objetos

// OBJETO This (hace referencia a un contexto)

var mascota = {
    animal: 'perro', 
    raza: 'Ovejero Aleman', 
    amistoso: true,
    dueño: 'Maria Lopez',
    info: function() {
        console.log('mi perro es un ' + this.raza)
    }
}

mascota.info()
