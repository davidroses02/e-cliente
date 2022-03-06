/**
 * @file
 * CRÓNICA DE UNA MUERTE ANUNCIADA......................
 * Se invocarán las siguientes funciones:
 * 
 * cambiaH1():  que  Modifica H1 de la siguiente forma:
 * - Añade al contenido actual de h1 tu apellido
 * - Modifica el color o el color de fondo de h1
 *
 *   annadeElementos(): 
 * Añade al elemento <ul> un <li> con cada uno de los personajes
 * Para ello parte del siguiente array 
 * ["Iván Baeza", "Santiago Nasar", "Ángela Vicario", "Pedro Vicario", "Pablo Vicario"]
 * Recórrelo mediante un método 
 * 
 * @author Magarín
 * 
 * */

{

    const cambiaH1 = function(x) {
        let h1 = document.createElement("h1");
        let apellido = document.createTextNode("Rosas");
        h1.appendChild(apellido);
        x.document.body.h1; // <- no me acuerdo de esta parte
    }

    const annadeElementos = function(x) {
        let arr = ["Iván Baeza", "Santiago Nasar", "Ángela Vicario", "Pedro Vicario", "Pablo Vicario"];
        let ul = document.createElement("ul");
        arr.forEach( e => { 
            let li = document.createElement("li");
            let nombre = document.createTextNode(e);
            li.appendChild(nombre);
            ul.appendChild(li);
        })
        x.document.body.ul; // <- no me acuerdo de esta parte

    }

    const init = function() {
        let enlace = document.getElementById("idEj1");
        enlace.addEventListener("click", function () {
            let ventana = window.open("", "", width="600", height="1100");
            ventana.document.open();
            ventana.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="style.css">
                <meta name="author" content="David Rosas">
                <script src="js/ej1.js"></script>
                <title>Examen UD3. Objetos predefinidos. Nombre Apellido1 Apellido2</title>
            </head>
            <body>
                
                <a href="" id="idAtras">Atrás</a>
            </body>
            `);

            ventana.addEventListener("DOMContentLoaded", function () {
                cambiaH1(this);
                annadeElementos(this);
                this.document.getElementById("idAtras").addEventListener("click" , function () {
                    ventana.close();
                });

            } );
            ventana.document.close();
        });


    };

    window.addEventListener("DOMContentLoaded", init);

}
