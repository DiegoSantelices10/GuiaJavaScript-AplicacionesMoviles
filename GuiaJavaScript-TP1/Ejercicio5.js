//Ejercicio 5
/* Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. 
Un alumno aprobó si todas sus notas son mayores o iguales a 4 */

const arrayNotas = [6,2,7,5];

function aprobo (arrayNotas){

    console.log(arrayNotas.every(num => num >= 4));
}


aprobo(arrayNotas);