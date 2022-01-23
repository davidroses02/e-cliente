/**
 * @author DavidRosas
 */
{


    const init = function() {

        /* Ejercicio 4 */
        console.log("--Ejercicio 4--");
        let array = [1, 2, {
            3: 3,
            5: 5
        }];
        console.log("Array original: ");
        console.log(array);

        let c1 = array.slice();
        console.log("c1:");
        console.log(c1);

        let c2 = JSON.parse(JSON.stringify(array));
        console.log("c2:");
        console.log(c2);
        
        array[2][5] = 55; // Cambiamos el valor de la clave 5 del objeto
        
        console.log("c1:");
        console.log(c1);

        console.log("c2:");
        console.log(c2);
        
        /* Ejercicio 5 */
        console.log("--Ejercicio 5--");
        let cadena = "Zenda Menchú";
        console.log("La cadena: " + cadena);

        let nombre;
        let apellido;
        [nombre, apellido] = cadena.split(" ");
        console.log("Variable nombre: " + nombre);
        console.log("Variable apellido: " + apellido);
        
        /* Ejercicio 6 */
        console.log("--Ejercicio 6--");

        /* Ejercicio 6.1 */
        console.log("--Ejercicio 6.1--");

        let arraySort = () => {
            let arrayInterno = ['dolar', 'dólar', 'Amigo', 'ánimo', 'Ágora', 'Decisicón'];
            console.log("Array original: " + arrayInterno);
            arrayInterno.sort((a, b) =>
            a.localeCompare(b)
            );
            console.log("Array ordenado: " + arrayInterno);
        }

        arraySort();
        
        /* Ejercicio 6.2 */
        console.log("--Ejercicio 6.2--");

        const objetoApellido = () => {
            let alumnas = [{
                nombre: 'Anacleta',
                apellido: 'Cándida'
            }, {
                nombre: 'Manola',
                apellido: 'Cántica'
            }, {
                nombre: 'Simona',
                apellido: 'Barola'
            }];

            kk = alumnas;
            let alumnasObjeto = JSON.parse(JSON.stringify(alumnas));
            kk2 = alumnasObjeto;
            console.log("Objeto original: ");
            console.log(alumnas);
            alumnasObjeto.sort((a, b) =>
                a.apellido.localeCompare(b.apellido)
                );
                console.log("Objeto ordenado: ");
                console.log(alumnasObjeto);
        }
        objetoApellido();
    }

    document.addEventListener("DOMContentLoaded", init);


}