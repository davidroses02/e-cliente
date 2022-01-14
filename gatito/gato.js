/**
 * @author David Rosas
 */

class Gato {

    constructor(nombre, raza, fecha, peso, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.fecha = fecha;
        this.peso = peso;
        this.edad = edad;
    }

    comer() {
        this.peso++;
    }
    
    jugar() {
        this.peso--;
        if (this.peso < 1) {
            throw "El gato murió por no parar de jugar.";
        }
    }

}