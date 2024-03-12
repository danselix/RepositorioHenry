// funciones
function sumaTres(x) {
    console.log(x + 3);
}
sumaTres(5) 
// sintaxsis de una funcion:
// function: nomrbreDeLaFuncion(argumento) {cuerpo de la funcion}
// hay tres formas de definir una funcion:

//PRIMERO
function SumaTres(x) {
    return x + 3;
}

//SEGUNDO
var sumaTres = function(x){
    return x +3;
}

//TERCERO
var sumaTres = (x) => { //funcion de flecha
    return x + 3;
}

// console.log es una ayuda visual para el programador, la cual indica por consola el valor de una variable. NINGUN CODIGO DEBERIA TENER CONSOLE.LOG EN SU RESULTADO FINAL. Hay que eliminarlas despues de programar.

// return es una funcion que nos infica que valor nos debe devolver el codigo una vez ejecutado.