/**
 * @author Magarín
 */

//en visual usad el autoformato ALT + SHIFT + F
//evitando la globalidad. Así las variables/funciones no pueden alterar su valor desde fuera/consola
{
    let numerosInput, letraInput, mensajeSpan;

    let confirmarLetra = function () {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
            'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        if (letraInput.value.toUpperCase().trim() != letras[numerosInput.value.trim() % 23]) {
            console.log("La letra o el número proporcionados no son correctos");
            mensajeSpan.textContent = "La letra o el número proporcionados no son correctos";
        }
        else {
            console.log("El número de DNI y su letra son correctos");
            mensajeSpan.textContent = "El número de DNI y su letra son correctos";
        }
    };

    //hasta que no esté cargado el arbol DOM no se pueden obtener los elementos
    document.addEventListener("DOMContentLoaded", function () {
        //Se obtiene sólo una vez, al cargar y no al hacer click
        numerosInput = document.getElementById("numeros");
        letraInput = document.getElementById("letra");
        mensajeSpan = document.getElementById("mensaje");
        document.getElementById("confirma").addEventListener("click", confirmarLetra);
    });
}