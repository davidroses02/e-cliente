/**
 * @author David Rosas
 */

{
    
    const init = function() {

        // COMPORTAMIENTO EDAD
        document.getElementById("botonEdad").addEventListener("click", function() {
            let inputEdad = document.querySelector("#edad");
            let edad = window.gato.edad;
            inputEdad.removeAttribute("disabled");
            inputEdad.setAttribute("value", edad);
            inputEdad.setAttribute("disabled", "");
        })

        // GATO JUGANDO
        document.getElementById("jugar").addEventListener("click", function() {
            let inputPeso = document.querySelector("#peso");
            try {
                
                window.gato.jugar();
                
                // meter esto en un método
                inputPeso.removeAttribute("disabled");
                inputPeso.setAttribute("value", window.gato.peso);
                inputPeso.setAttribute("disabled", "");

            } catch (error) {
                deshabilitarBotones();
                mostrarMensaje(error)
                // foto de muerto -->
                // let img = document.getElementByTagName("img");
                // img.setAttribute("src", "./img/gatoMuerto.png");
            }
        })

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