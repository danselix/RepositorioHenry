// OPERADORES LOGICOS
// not: es la negacion 
// and: conjuncion
// or:  disyuncion

//          and = &&

function mayorYMenor (num){

    if (num > 5 && num < 10) {console.log(true)}
    else {console.log(false)}
    //si num es mayor que 5 Y menor que 10, entonces imprime true, de lo contrario imprime false.
    // todos los && de la funcion deben cumplirse, de lo contrario sera falso.
}
// mayorYMenor(6)

function mayorYMenorYPar (num){

    if (num > 5 && num < 10 && num % 2===0) {console.log(true)}
    else {console.log(false)}
    // en este caso tambien se evalua si el numero es par.
    // en consola podemos ver que aunque el numero este entre 5 y 10, si no es par, dara como resultado false.
}
//mayorYMenorYPar(7)
//mayorYMenorYPar(8) 


//          or = || 
// (se llama plica y se escribe con la tecla al lado del 1)
function operadorOr(str){
    if (str === "Henry" || str.length<2) {console.log('bienvenido henry')} 
    else {console.log('no eres henry')}
    // el operador or evalua si alguna de las condiciones se cumple, independientemente de que las otras condiciones no se cumplan.
    // en este caso si operadorOr es Henry, O tiene 1 letra, el codigo devolvera "hola henry", si ninguna de las dos condiciones se cumple entonces imprimira "no eres henry"
}
// operadorOr("")

//          not = !
// este operador lo que hara es negar (cambiar) el significado de la funcion u objeto al que se lo agreguemos. 
// !true = false
// !amor = odio
// asi que ! (not) es un operador booleano
function negacion(permiso){
    if (permiso) console.log("tiene permiso")
    else {console.log("no tiene acceso")}
}

function amor(cariño){
    if (!cariño) console.log("ella no te ama")
    // otra forma de escribirlo: cariño !== true (si cariño es diferente a true)
    else {console.log("ahi es broo <3")}
}
// negacion(false)
amor(true)

function condicionCompleja (num){
    if (num > 9 && num % 2 === 0 || num === 3) {console.log(true)}
    // hay que tener en cuenta el orden de presedencia, si or estuviese antes de la segunda condicion.. los resultados podrian ser otros.
    else {console.log(false)}
}
// condicionCompleja(10)
// condicionCompleja(3)
// condicionCompleja(4)

//Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. En una declaración &&, si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true. 

// Lo mismo para la declaración ||. Si la primera expresión es verdadero, la segunda no se evaluará porque solo debe haber una declaración verdadera para cumplir con los requisitos del operador. 

// Utiliza paréntesis. Como vimos en el segundo ejemplo de la negación !, utilizamos paréntesis para evaluar PRIMERO lo que estaba dentro de ellos, y luego aplicamos la negación. Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes que toda la expresión en conjunto.