//Ejercicio 7
/*Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo */

const listaNumero = [1,2,3,-4,-5];

function numNegativo (listaNum){

console.log(listaNum.filter(num => num <= 0));


}

numNegativo(listaNumero);

