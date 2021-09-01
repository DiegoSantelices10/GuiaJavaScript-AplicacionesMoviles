//Ejercicio 4
/* Define una función que dado un array de números nos dice si alguno es par. */
function esPar (arrayNum){

console.log(arrayNum.some(num => num % 2 === 0));


}


esPar([1,3,5,7]);
esPar([1,2,5,7]);