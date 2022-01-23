# Tarea 4.5. Listado Arrays y otros.

## 1. Indica qué hace miArray.slice();

El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. LA SINTAXIS ES: *arr.slice([inicio [, fin]])*.
Ejemplo:

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']

## 2. Indica qué hace. JSON.parse( JSON.stringify( miArray ) );

El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis. Y El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.

## 3. Indica la diferencia de funcionalidad entre las dos sentencias anteriores.

JSON.stringify() --> convierte un objeto o valor de JavaScript en una cadena de texto JSON. Y JSON.parse analiza la cadena de texto devolviendo el objeto que se corresponde con el texto JSON entregado.