/**
 * @author David Rosas
 */

class Gato {

    constructor(nombre, raza, fecha, peso) {
        this.nombre = nombre;
        this.raza = raza;
        this.fecha = fecha;
        this.peso = peso;
    }

    comer() {
        this.peso++;
    }

    jugar() {
        this.peso--;
    }

}