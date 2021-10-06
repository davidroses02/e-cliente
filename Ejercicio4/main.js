/** @author David Rosas */

    let valores = [true, 5, false, "hola", "adios", 2];

    /** Parte 1 */
    console.log("hola > adios = ");
    console.log(valores[3] > valores[4]);

    /** Parte 2 */
    
    // Con el operador AND
    console.log("true && false");
    console.log(valores[0] && valores[2]);

    // Con el operador OR
    console.log("true || false");
    console.log(valores[0] || valores[2]);

    /** Parte 3 */

    console.log(" Suma de 5 + 2 = " + (valores[1] + valores[5]) + "\n" 
    + " Resta de 5 + 2 = " + (valores[1] - valores[5]) + "\n" 
    + " Multiplicación de 5 + 2 = " + (valores[1] * valores[5]) + "\n" 
    + " División de 5 + 2 = " + (valores[1] / valores[5]) + "\n" 
    + " Potencia de 5 + 2 = " + (valores[1] ** valores[5]) + "\n"  );

