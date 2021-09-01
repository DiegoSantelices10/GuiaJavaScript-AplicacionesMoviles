//Ejercicio 6
/*Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. 
Podés usar la función que hiciste en el ejercicio anterior.
 */


const arrayNotas = ([[4,4,4,4],[7,9,4,5]]);

function quienesAprobaron (arrayNotas){

const alumnosAprobados = arrayNotas.filter(a => a.every(b => b >= 4));
alumnosAprobados.forEach(element => { console.log(element) });
        
}

quienesAprobaron(arrayNotas);
