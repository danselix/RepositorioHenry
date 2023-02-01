function viajar(destino) {
    if (destino === "brasil"){
        console.log('gire a la izquierda')
    } else if (destino === "argentina"){
        console.log("gire a la derecha")
    } else {
        console.log("nos perdimos")
    }
}

viajar("no se")

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } else {
    console.log( false );
}
  }
  
  puedeManejar(17);

  // sintaxis:
  // if es el condicional (y entre parentesis colocaremos la condicion que se debe cumplir) {seguido entre corchetes de la accion a tomar si se cumple la funcion}
  // if else servira para colocar mas condiciones de ser necesario (seguida de su condicion y cuerpo)
  // else nos servira para indicar que se debe hacer si ninguna de las anteriores condiciones se cumplieron