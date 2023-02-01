// operadores de comparacion ( < > == != )
console.log(4 < 7);
console.log(4 > 1);
console.log(4 > 4);
console.log(4 == 7);

// operadores de asignacion (= igual)(== igualdad)(=== igualdad estricta)

console.log(3 == 3); //true
console.log(3 === 3); // true
console.log(3 == '3'); // true
console.log(3 === '3'); // flase
// depende de el tipo de dato (en este caso usamos numeros y "strings")
// === (igualdad estricta) verifica que sea el mismo tipo de dato y de valor. mientras que == solo verifica el valor.

// se dice que es una buena practica usar (siempre) el operador de comparacion estricta (===) pues le va a dar mas previsibilidad a nuestro codigo

// asociatividad
var a = 1;
var b = 2;
var c = (a = b);
// cuando se usa '=' como operador de asignacion y este asigna el valor de abajo hacia arriba y de derecha a izquierda. por ende a termina siendo igual a 1.
console.log(a) // 2
console.log(b) // 2
console.log(c) // 2