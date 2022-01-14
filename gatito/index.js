/**
 * @author David Rosas
 */

{

    const init = function () {
        document.getElementById("boton").addEventListener("click", function () {

            // Recojo los datos
            let nombre = document.getElementById("inputNombre").value;
            let raza = document.getElementById("raza");
            let valorRaza = raza.options[raza.selectedIndex].text;
            let inputFecha = document.getElementById("fecha").value;
            let peso = document.getElementById("inputPeso").value;
            
            // Calculo la edad
            let edad = calcularEdad(inputFecha);
            console.log(edad);
            // Creo el objeto gato
            const gato = new Gato(nombre, valorRaza, inputFecha, peso, edad);

            // Creo la ventana.
            crearVentana(gato);

        })

    }

    const calcularEdad = function(inputFecha) {
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        console.log(year);
        return parseInt(inputFecha) - year;
    }

    const crearVentana = function(gato) {
        let propiedadesVentana = "width=550,height=600";
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
                        <h1>${gato.nombre}</h1><br>
                        <label>Nombre: <input value="${gato.nombre}" disabled></label><br><br>
                        <img width="380" src="./img/principal.jpg"/><br><br>
                        <label>raza: <input value="${gato.raza}" disabled></label><br>
                        <label>Fecha: <input value="${gato.fecha}" disabled></label><br>
                        <label>Peso: <input value="${gato.peso}" id="peso" disabled></label><br>
                        <label>Edad: <input id="edad" disabled></label><br><br>
                        <button id="eat">Comer</button>
                        <button id="jugar">Jugar</button>
                        <button id="botonEdad">Edad</button>
                        <p id="muerte"></p>
                    </body>
                    </html>
                    `
        );
        ventana.document.close();
        ventana.gato = gato;
    }
    
    document.addEventListener("DOMContentLoaded", init);

}

