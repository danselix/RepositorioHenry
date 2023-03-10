//              bucles en arrays.

//              Bucle FOR
// Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

// for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
var arr = [1,2,3,4,5,6,7,8,9,10]

for (var i= 0; i < arr.length; i++) {
    console.log(arr[i])
}


function encontrarLetraP(string){
    var letras=string.split('')

    for(let i = 0;i<letras.length; i++) {
        if (letras[i] === 'p') {
            console.log('Si contiene letra p')
        }
    }
}

encontrarLetraP('Javascript')
encontrarLetraP('Henrry')

//           Bucle While
// Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

// while (condicion)
  // sentencia

var arr = []

while (arr.length<5) {
    arr.push('BOOM')
}
console.log(arr)

//            Bulces INFINITOS

// siempre se debe evitar que un bucle no cierre porque consume muchos recursos y porque lo ideal es siempre obtener un resultado concreto de un bucle, cualquiera este sea.