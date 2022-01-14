/**
 * @author David Rosas
 */

{
    
    const init = function() {
        document.getElementById("botonEdad").addEventListener("click", function() {
            let inputEdad = document.querySelector("#edad");
            console.log(inputEdad);
            let edad = window.gato.edad;
            inputEdad.removeAttribute("disabled");
            inputEdad.setAttribute("value", edad);
            inputEdad.setAttribute("disabled", "")

        })
    }

    document.addEventListener("DOMContentLoaded", init);
}