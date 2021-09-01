//Ejercicio 13

//Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante. 
//Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando 
//y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. Además este método es responsable de manejar
// de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)

const Persona = require("./Ejercicio11.js");
const Estudiante = require("./Ejercicio12.js");
class Profesor extends Persona {
    constructor(nombre, edad){
        super(nombre, edad);
        this.nombre;
        this.edad;
        this.estudiantes = [];
}
    enseniando(){
        console.log("Le estoy enseñando a los alumnos: ")   
     return this.estudiantes.forEach(e =>console.log(e.nombre))
    }

addEstudiantes(estudiante){
this.estudiantes.push(estudiante);
estudiante.setProfesor(this.nombre);
}
}
const profe = new Profesor("diegote", 45);
var e1 = new Estudiante("gabrielas");
var e2 = new Estudiante("Jorge");
profe.presentarse();
profe.addEstudiantes(e1);
profe.addEstudiantes(e2);
profe.enseniando();