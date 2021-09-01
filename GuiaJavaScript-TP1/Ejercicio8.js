// Ejercicio 8

/* Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen */
const arrayNum = [2,4,6,8];

function esPar (arrayNum){
let cant = 0
arrayNum.filter(num => num % 2 === 0 ? ++cant : "");

   console.log(cant);     
}



function cuantosCumplen (esPar, arrayNum){ esPar(arrayNum) };

cuantosCumplen(esPar, arrayNum);