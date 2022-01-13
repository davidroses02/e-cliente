/**
 * @author David Rosas
 */

{

    const miCalculadora = {
        operando1: 0,
        operando2: 0,
        suma: false,
        resta: false,
        porcentaje: false,
        mult: false,
        division: false,

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
                        reset();
                        break;
                    case 'DEL':
                        let longitud = display.innerHTML.length;
                        display.innerHTML = display.innerHTML.substring(0, longitud - 1);
                    break;
                    case '+/-':
                        if (display.innerHTML !== '0' && display.innerHTML > 0) {
                            display.innerHTML = '-' + display.innerHTML;
                        } else {       
                            display.innerHTML = Math.abs(display.innerHTML) + "";
                        }
                        break;
                    case ',':
                        if (!display.innerHTML.includes(".")) {
                            display.innerHTML += ".";
                        }
                        break;
                    case '+':
                        miCalculadora.operando1 =  display.innerHTML;
                        reset();
                        miCalculadora.suma = true;
                        break;
                    case '-':
                        miCalculadora.operando1 =  display.innerHTML;
                        reset();
                        miCalculadora.resta = true;
                        break;
                    case 'X':
                        miCalculadora.operando1 =  display.innerHTML;
                        reset();
                        miCalculadora.mult = true;
                        break;
                    case '%':
                        miCalculadora.operando1 =  display.innerHTML;
                        reset();
                        miCalculadora.porcentaje = true;
                        break;
                    case '/':
                        miCalculadora.operando1 =  display.innerHTML;
                        reset();
                        miCalculadora.division = true;
                        break;
                    case '=':
                        miCalculadora.operando2 =  display.innerHTML;
                        reset();

                        if (miCalculadora.suma) {
                            display.innerHTML = parseInt(miCalculadora.operando1) + parseInt(miCalculadora.operando1) + "";
                            miCalculadora.suma = false;
                            miCalculadora.operando1 = 0;
                            miCalculadora.operando2 = 0;
                        } else if (miCalculadora.resta) {
                            display.innerHTML = parseInt(miCalculadora.operando1) - parseInt(miCalculadora.operando1) + "";
                            miCalculadora.resta = false;
                            miCalculadora.operando1 = 0;
                            miCalculadora.operando2 = 0;
                        } else if (miCalculadora.mult) {
                            display.innerHTML = parseInt(miCalculadora.operando1) * parseInt(miCalculadora.operando1) + "";
                            miCalculadora.mult = false;
                            miCalculadora.operando1 = 0;
                            miCalculadora.operando2 = 0;
                        } else if (miCalculadora.porcentaje) {
                            display.innerHTML = parseInt(miCalculadora.operando1) % parseInt(miCalculadora.operando1) + "";
                            miCalculadora.porcentaje = false;
                            miCalculadora.operando1 = 0;
                            miCalculadora.operando2 = 0;
                        } else if (miCalculadora.division) {
                            display.innerHTML = parseInt(miCalculadora.operando1) / parseInt(miCalculadora.operando1) + "";
                            miCalculadora.division = false;
                            miCalculadora.operando1 = 0;
                            miCalculadora.operando2 = 0;
                        }

                    break;
                    default:
                        break;
                }
            }

            const reset = function() {
                display.innerHTML = "0";
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
    
    document.addEventListener('DOMContentLoaded' , miCalculadora.init);


}