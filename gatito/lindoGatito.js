/**
 * @author David Rosas
 */

{
    
    const init = function() {

        // COMPORTAMIENTO EDAD
        document.getElementById("botonEdad").addEventListener("click", function() {
            let inputEdad = document.querySelector("#edad");
            editarInputs(inputEdad, window.gato.edad);
        })

        // GATO JUGANDO
        document.getElementById("jugar").addEventListener("click", function() {
            let inputPeso = document.querySelector("#peso");
            try {
                window.gato.jugar();    
                fotoAcciones("./img/jugar.jpg");
                editarInputs(inputPeso, window.gato.peso);
            } catch (error) {
                deshabilitarBotones();
                mostrarMensaje(error);
                fotoGatoMuerto();
            }
        })

        // GATO COMIENDO
        document.getElementById("eat").addEventListener("click", function() {
            let inputPeso = document.querySelector("#peso");
            try {
                window.gato.comer();
                fotoAcciones("./img/comer.png");
                editarInputs(inputPeso, window.gato.peso);
            } catch (error) {
                deshabilitarBotones();
                mostrarMensaje(error);
                fotoGatoMuerto();
            }
        })

    }

    const fotoAcciones = function(ruta) {
        let img = document.querySelector("#image");
        img.setAttribute("src", ruta);
    }

    const editarInputs = function(input, param) {
        input.removeAttribute("disabled");
        input.setAttribute("value", param);
        input.setAttribute("disabled", "");
    }

    const fotoGatoMuerto = function() {
        let img = document.querySelector("#image");
        img.setAttribute("src", "./img/gatoMuerto.png");
    }

    const deshabilitarBotones = function() {
        let jugar = document.getElementById("jugar");
        let comer = document.getElementById("eat");
        let edad = document.getElementById("botonEdad");
        jugar.setAttribute("disabled", "");
        edad.setAttribute("disabled", "");
        comer.setAttribute("disabled", "");
    }

    const mostrarMensaje = function(error) {
        let p = document.getElementById("muerte");
        p.innerText = error;
    }

    document.addEventListener("DOMContentLoaded", init);
}