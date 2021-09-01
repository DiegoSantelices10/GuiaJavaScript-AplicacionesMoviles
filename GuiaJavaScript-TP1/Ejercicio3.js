//Ejercicio 3
/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto 
que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function esPar(num) {
    if(num%2 == 0){
      console.log(num, "es par");
    } else {
        console.log(num, "es impar");
    }
}


esPar(10);
esPar(19);