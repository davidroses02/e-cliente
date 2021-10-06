/** @author David Rosas */

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
    'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let numero = parseInt(prompt("Introduce un numero: "));
    let letraDNI = prompt("Introduce la letra: ").toUpperCase();

    if (numero < 0 && numero > 99999999) {
        console.log("El número proporcionado no es válido.");
    } else {
        if ( letras[numero%23] == letraDNI) {
            console.log("El DNI es correcto.");
        } else {
            console.log("La letra del dni no es correcta.");
        }
    }