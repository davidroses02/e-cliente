/**
 * @author David Rosas
 */

{

    const init = function() {
        document.getElementById("boton").addEventListener("click" , function () {
            
            let nombre = document.getElementById("inputNombre").value;
            
            let raza = document.getElementById("raza");
            let valorRaza = raza.options[raza.selectedIndex].text;

            let fecha = document.getElementById("fecha").value;
            let peso = document.getElementById("inputPeso").value;

            // Crear la ventana. 
            // Con un html que tenga los inputs bloqueados. los botones de jugar, y las imágenes.
            // creo el html, y le pongo en el script el lindogatito.js, y desde ahí hago todo el compartiemto.


        })

    }

    document.addEventListener("DOMContentLoaded" , init);

}