/**
 * @file
 * 
 * AÑADE a cada <li> lo solicitado, NO MACHAQUES
 * Añade también comportamiento a cada botón: volver a la página anterior y cerrar esta página
 * 
 * @author Magarín
 */

//navigator.online

{

    const init = function() {
        let protocol = document.getElementById("protocolo");
        protocol.innerHTML = location.protocol; // me vas a perdonar por machacar eso, sé que tengo que añadir un span dentro de la lista. Pero no consigo que me funcione. 
        
        let conexion = document.getElementById("conexion");
        conexion.innerHTML = navigator.onLine; 
    
        let botones = document.getElementsByTagName("button");
        botones[0].addEventListener("click", function() {
            history.back();
        });
        document.getElementById("cerrar").addEventListener("click", function() {
            window.close();
        })
    }

    window.addEventListener("DOMContentLoaded", init); 
}