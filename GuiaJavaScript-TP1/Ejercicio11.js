//Ejercicio 11 



//Crea una clase Persona que tenga los atributos nombre y edad. 
//Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.



class Persona {
 
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

 

 presentarse() {
        console.log("Nombre: "+ this.nombre + " Edad: "+ this.edad);
    };

}

module.exports = Persona;

