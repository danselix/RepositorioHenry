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

//misFunciones.saludar();
//misFunciones.despedirse();


var atuendos = {
    manos: ['Guantes', 'Anillos'], 
    pies: ['Zapatos', 'Soquetes']
}
//Ejemplo de Dot-notation. hace referencia a el tipo de acceso por medio de puntos a las propiedades de un objeto.
//console.log(atuendos.manos);

//Braket-notation. hace referencia a el acceso y escritura de datos por medio de barra inclinadas.
atuendos['pierna']= ['Bermudas', 'Pantalones']

console.log(atuendos)