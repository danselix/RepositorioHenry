//                                      ARRAYS o ARREGLOS


// un array son un tipo de datos en los cuales podemos guardar informacion. lo mas importante acerca de los arrays son los indices (que se refiere a la posicion del dato dentro de el array y se comienza a contar desde 0) y los elementos en si.

var listaDeCompras =[]
listaDeCompras[3] = "Tomates" // esta asignando tomates al indice 3 dentro del array
listaDeCompras[1] = "Lechuga" // esta asignando Lechuga al indice 1 del array

//console.log(listaDeCompras) // [ <1 empty item>, 'Lechuga', <1 empty item>, 'Tomates' ]

// de esta manera puede introducirse datos al array. Para sacar datos de un array podemos hacerlo asi:

var elementosDelArray = listaDeCompras[2]
//console.log(elementosDelArray)
// el metodo mas utilizado dentro de los array es length, el cual nos dira cuantos elementos tiene un array.
//console.log(listaDeCompras.length)


 // metodos mas usados dentro de los arrays
var colores=["amarillo", "azul"]
colores.push('rojo') // .push nos permite agregar elementos a la lista. con este comando se agregara el elemento al final de la lista
colores.unshift("verde") // .unshift nos permitira hacer lo mismo que .push, con la diferencia de que este metodo agregara el elemento al principio de la lista, despazando en posicion a los demas elementos.
//console.log(colores)

colores.pop() //.pop nos permite eliminar el ultimo elemento de la lista. 
colores.shift() // .shift nos permite eliminar el primer elemento de la lista. 
//console.log(colores)

//                    Metodo INCLUDES.
// este metodo nos permite saber si es que un elemento se encuentra dentro de un array. 

var pintores = ['Picasso', 'Velzaques', 'Van Gogh', 'Dali']
var include = pintores.includes('Dali')
//console.log(include) // esto arrojara como resultado true

//                      Metodo EVERY

//           array.every(callback[, thisArg])

var numeros = [7,6,8,9]

var cumplenCondicion = numeros.every((num) => {return num > 5})
// .every funciona para determinar si es que todos los elementos de un array cumplen con una condicion especifica. en caso de ser correcto devuelve true, y en caso contrario false.
// console.log (cumplenCondicion)

//                      Metodo Split y join

var palabra = 'henri'
var palabraSeparada = palabra.split('')
palabraSeparada.pop()
palabraSeparada.push('y')
// console.log(palabraSeparada)
// [ 'h', 'e', 'n', 'r', 'i' ]
var palabraArreglada= palabraSeparada.join('')
//  console.log(palabraArreglada)
// lo que estamos haciendo en este ejepmlo es convertir un string en un array para poder cambiar la ultima letra por la correcta en el nombre "Henry" usando .split y .join para convertir y 'desconvertir' la palabra y reemplazando la i por una y.

//                        Metodo FOREACH

// array.forEach(callback(currentValue [, index [, array]]) {
// acciones a realizar en cada elemento del array
// });


var numeros = [1,2,3,4]
// numeros.forEach((num) => console.log (num)) //este ejemplo imprime todos los numeros del array

//numeros.forEach((num) => {if(num===3) {console.log(num)}}) // este ejemplo imprime el numero 3 si esta dentro del array

var masUno = numeros.map((num) => {return num +1})
console.log(masUno) // este ejemplo usa .map para modificar el array y darnos ese valor modificado.