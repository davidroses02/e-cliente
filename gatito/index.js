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

            const gato = new Gato(nombre, valorRaza, fecha, peso);
            let propiedadesVentana = "width=550,height=900";
            let ventana = window.open('', '', propiedadesVentana);
            ventana.document.open();
            ventana.document.write(
                `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="autor" content="David Rosas">
                    <script src="lindogatito.js"></script>
                    <title>Gatito</title>
                </head>
                <body>
                    <h1>${nombre}</h1><br>
                    <label>Nombre: <input value="${nombre}" disabled></label><br>
                    <img width="200" src="./img/principal.jpg"/><br>
                    <label>raza: <input value="${valorRaza}" disabled></label><br>
                    <label>Fecha: <input value="${fecha}" disabled></label><br>
                    <label>Peso: <input value="${peso}" id="peso" disabled></label><br>
                    <label>Edad: <input id="edad" disabled></label><br>
                    <button id="eat">Comer</button>
                    <button id="jugar">Jugar</button>
                    <button id="edad">Edad</button>
                    <p id="muerte"></p>
                </body>
                </html>
                `
            )
            ventana.document.close();
            ventana.gato = gato;

        })

    }

    document.addEventListener("DOMContentLoaded" , init);

}