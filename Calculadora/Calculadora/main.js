/**
 * @author David Rosas
 */

{

    const miCalculadora = {
        init: function() {

            let botones = [
                "CE", "DEL", "%", "+", 
                "7", "8", "9", "-", 
                "4", "5", "6", "X", 
                "1", "2", "3", "/", 
                "0", "+/-", ",", "="
            ]

            // mostrar la calculadora

            let main = document.createElement("div");
            anadirCSSMain(main);
            let display = document.createElement("div");
            display.innerHTML = '0';
            anadirCSSDisplay(display);
            main.appendChild(display);
            botones.forEach(e => {
                let newDiv = anadirBoton(e)
                newDiv.addEventListener("click", function() {
                    comportamientoBoton(this);
                });
                main.appendChild(newDiv);
            });
            document.body.appendChild(main);

            // Empieza el comportamiento

            const comportamientoBoton = function(e) {
                //display.innerHTML = "0";
                let numero = e.innerText;
                switch (numero) {
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        if (display.innerHTML === '0') {
                            display.innerHTML = numero;
                        } else {
                            display.innerHTML += numero;
                        }
                        break;
                    case '0':
                        if (display.innerHTML === '0') {
                            display.innerHTML = '';
                            display.innerHTML += numero;
                        } else {
                            display.innerHTML += numero;
                        }
                        break;
                    case 'CE':
                        display.innerHTML = "0";
                        break;
                    case 'DEL':
                        
                        // borra una cifra (la que está más a la derecha)
                    break;
                    default:
                        break;
                }
                //display.innerHTML += numero;
            }

        }
        
    }

    const anadirCSSDisplay = function(e) {
        e.style.setProperty("grid-column-start", "1"); 
        e.style.setProperty("grid-column-end", "5"); 
        e.style.setProperty("border", "1px black solid"); 
        e.style.setProperty("min-height", "15px");
        e.style.setProperty("background-color", "white"); 
        e.style.setProperty("text-align", "right"); 

    }

    const anadirCSSMain = function(e) {
        e.style.setProperty("border", "3px black solid"); 
        e.style.setProperty("border-radius", "3px"); 
        e.style.setProperty("padding", "3px"); 
        e.style.setProperty("display", "grid"); 
        e.style.setProperty("grid-template-columns", "1fr, 1fr, 1fr, 1fr"); 
        e.style.setProperty("width", "140px"); 
        e.style.setProperty("height", "240px"); 
        e.style.setProperty("border", "3px black solid"); 
        e.style.setProperty("background-color", "#071690"); 
    }

    const anadirBoton = function(e) {
        let newDiv = document.createElement("div");
        let newContent = document.createTextNode(e);
        newDiv.appendChild(newContent);

        newDiv.style.setProperty("border", "1px solid"); 
        newDiv.style.setProperty("border-color", "#030D61");
        newDiv.style.setProperty("text-align", "center"); 
        newDiv.style.setProperty("vertical-align", "middle"); 
        newDiv.style.setProperty("color", "white"); 
        newDiv.style.setProperty("font-size", "20px"); 
        newDiv.style.setProperty("background-color", "#071690"); 
        return newDiv;
    }
    
    document.addEventListener('DOMContentLoaded' , function () {
        miCalculadora.init();
    });


}