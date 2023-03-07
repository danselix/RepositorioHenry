//                                      ARRAYS o ARREGLOS


// un array son un tipo de datos en los cuales podemos guardar informacion. lo mas importante acerca de los arrays son los indices (que se refiere a la posicion del dato dentro de el array y se comienza a contar desde 0) y los elementos en si.

var listaDeCompras =[]
listaDeCompras[3] = "Tomates" // esta asignando tomates al indice 3 dentro del array
listaDeCompras[1] = "Lechuga" // esta asignando Lechuga al indice 1 del array

console.log(listaDeCompras) // [ <1 empty item>, 'Lechuga', <1 empty item>, 'Tomates' ]

// de esta manera puede introducirse datos al array. Para sacar datos de un array podemos hacerlo asi:

var elementosDelArray = listaDeCompras[2]
console.log(elementosDelArray)

// el metodo mas utilizado dentro de los array es length, el cual nos dira cuantos elementos tiene un array.

console.log(listaDeCompras.length)