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
        display: undefined,

        init: function () {

            let botones = [
                "CE", "DEL", "%", "+",
                "7", "8", "9", "-",
                "4", "5", "6", "X",
                "1", "2", "3", "/",
                "0", "+/-", ",", "="
            ]

            const generaComportamiento = function (e) {
                switch (e) {
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        return () => {
                            if (miCalculadora.display.innerHTML === '0') {
                                miCalculadora.display.innerHTML = e;
                            } else {
                                miCalculadora.display.innerHTML += e;
                            }
                        }
                    case '0':
                        return () => {
                            if (miCalculadora.display.innerHTML === '0') {
                                miCalculadora.display.innerHTML = '';
                                miCalculadora.display.innerHTML += e;
                            } else {
                                miCalculadora.display.innerHTML += e;
                            }
                        }
                    case 'CE':
                        return () => {
                            reset();
                        }
                    case 'DEL':
                        return () => {
                            let longitud = miCalculadora.display.innerHTML.length;
                            miCalculadora.display.innerHTML = miCalculadora.display.innerHTML.substring(0, longitud - 1);
                        }
                    case '+/-':
                        return () => {
                            if (miCalculadora.display.innerHTML !== '0' && miCalculadora.display.innerHTML > 0) {
                                miCalculadora.display.innerHTML = '-' + miCalculadora.display.innerHTML;
                            } else {
                                miCalculadora.display.innerHTML = Math.abs(miCalculadora.display.innerHTML) + "";
                            }
                        }
                    case ',':
                        return () => {
                            if (!miCalculadora.display.innerHTML.includes(".")) {
                                miCalculadora.display.innerHTML += ".";
                            }
                        }
                    case '+':
                        return () => {
                            miCalculadora.operando1 = miCalculadora.display.innerHTML;
                            reset();
                            miCalculadora.suma = true;
                        }
                    case '-':
                        return () => {
                            miCalculadora.operando1 = miCalculadora.display.innerHTML;
                            reset();
                            miCalculadora.resta = true;
                        }
                    case 'X':
                        return () => {
                            miCalculadora.operando1 = miCalculadora.display.innerHTML;
                            reset();
                            miCalculadora.mult = true;
                        }
                    case '%':
                        return () => {
                            miCalculadora.operando1 = miCalculadora.display.innerHTML;
                            reset();
                            miCalculadora.porcentaje = true;
                        }
                    case '/':
                        return () => {
                            miCalculadora.operando1 = miCalculadora.display.innerHTML;
                            reset();
                            miCalculadora.division = true;
                        }
                    case '=':
                        return () => {
                            miCalculadora.operando2 = miCalculadora.display.innerHTML;
                            reset();
                            if (miCalculadora.suma) {
                                miCalculadora.display.innerHTML = parseInt(miCalculadora.operando1) + parseInt(miCalculadora.operando2) + "";
                                miCalculadora.suma = false;
                                resetearOperacion(miCalculadora);
                            } else if (miCalculadora.resta) {
                                miCalculadora.display.innerHTML = parseInt(miCalculadora.operando1) - parseInt(miCalculadora.operando2) + "";
                                miCalculadora.resta = false;
                                resetearOperacion(miCalculadora);
                            } else if (miCalculadora.mult) {
                                miCalculadora.display.innerHTML = parseInt(miCalculadora.operando1) * parseInt(miCalculadora.operando2) + "";
                                miCalculadora.mult = false;
                                resetearOperacion(miCalculadora);
                            } else if (miCalculadora.porcentaje) {
                                miCalculadora.display.innerHTML = parseInt(miCalculadora.operando1) % parseInt(miCalculadora.operando2) + "";
                                miCalculadora.porcentaje = false;
                                resetearOperacion(miCalculadora);
                            } else if (miCalculadora.division) {
                                miCalculadora.display.innerHTML = parseInt(miCalculadora.operando1) / parseInt(miCalculadora.operando2) + "";
                                miCalculadora.division = false;
                                resetearOperacion(miCalculadora);
                            }
                        }
                    default:
                    break;
                }

            }

            let main = document.createElement("div");
            anadirCSSMain(main);
            miCalculadora.display = document.createElement("div");
            miCalculadora.display.innerHTML = '0';
            anadirCSSDisplay(miCalculadora.display);
            main.appendChild(miCalculadora.display);
            botones.forEach(e => {
                let newDiv = anadirBoton(e);
                newDiv.addEventListener("click", generaComportamiento(e));
                // newDiv.addEventListener("click", function() {
                //     comportamientoBoton(this);
                // });
                main.appendChild(newDiv);
            });
            document.body.appendChild(main);

            const reset = function () {
                miCalculadora.display.innerHTML = "0";
            }

        }

    }

    const anadirCSSDisplay = function (e) {
        e.style.setProperty("grid-column-start", "1");
        e.style.setProperty("grid-column-end", "5");
        e.style.setProperty("border", "1px black solid");
        e.style.setProperty("min-height", "15px");
        e.style.setProperty("background-color", "white");
        e.style.setProperty("text-align", "right");

    }

    const anadirCSSMain = function (e) {
        e.style.setProperty("border", "3px black solid");
        e.style.setProperty("border-radius", "3px");
        e.style.setProperty("padding", "3px");
        e.style.setProperty("display", "grid");
        e.style.setProperty("grid-template-columns", "1fr, 1fr, 1fr, 1fr");
        e.style.setProperty("width", "140px");
        e.style.setProperty("height", "250px");
        e.style.setProperty("border", "3px black solid");
        e.style.setProperty("background-color", "#071690");
    }

    const anadirBoton = function (e) {
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

    const resetearOperacion = function(miCalculadora) {
        miCalculadora.operando1 = 0;
        miCalculadora.operando2 = 0;
    }

    document.addEventListener('DOMContentLoaded', miCalculadora.init);

}