nombre = 'Danselix';

function cuidadoConElConsolelog (nombre) {
    console.log(nombre); //retorna el dato, pero no nos muestra el tipo de dato
    return nombre; // retorna el valor indicandonos tambien el tipo de dato
}

function otrafuncion () {
    return ( "el nombre retornado por la funcion'cuidadoConElConsolelog es: " + cuidadoConElConsolelog('Danselix')
    );
}

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}
