// bucles FOR y WHILE (Bucles=Ciclos de Iteracion)

// estamos aumentando en 1 cada numero hasta alcanzar el numero 10
var suma = 0;
//suma = suma + 1;
//suma = suma + 2;
//suma = suma + 3;
//suma = suma + 4;
//console.log(suma)

// este proceso es bueno, pero si quisieramos llegar al numero 100 de esta manera nos tomaria mucho codigo y lineas para alcanzarlo. qui es donde entran los bucles.

//     Bucle FOR
// for (variable de iteracion, condicion de cumplimiento, que debe suceder al terminar el ciclo) {el codigo que queremos que se repita en bucle}
for (var i=0 ; i<10 ; i++){
     suma = suma +1;
     console.log(suma);
}


for (var i=0 ; i<5 ; i++){
    suma = suma +i;
    console.log("variable interacion: " ,i);
}
console.log("Variable Suma", suma)

//    Bucle WHILE
// while (condicion){condigo que queremos que se repita}

while (suma < 23){
    suma = suma +1;
    console.log("while: " ,suma);
}

// utilizamos for cuando sabemos la cantidad maxima de pasos que queremos ejecutar (esta cantidad se declara en la segundo parametro dentro de los aprentesis). While se usa cuando no sabemos cuantos pasos necesitaremos para finalizar la ejecucion.

// for: seguire viendo series hasta que sean las 5.
// while: mientras este lloviendo no dejare de ver series.