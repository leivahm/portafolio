'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo
var pedro = 30;
var juan = 12;

// Si pasa esto...
if (pedro > juan) {  
    // Ejecuta esto...
    console.log("Pedro es mayor que Juan");     
} else {

    console.log("Juan es mayor que Pedro");
}

var edad = 7;
var nombre = 'David Suárez';

/* 
    Operadores relacionales
    Mayor:          >
    Menor:          <
    Mayor o igual:  >=
    Menor o igual:  <=
    Igual:          ==
    Distinto:       !=
*/

if (edad>=18) { 
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad<=33){ 
        console.log("Todavía eres millenial");
    } else if(edad >= 70) {
        console.log("Perteneces a la 3ra edad");
    } else { 
        console.log("Ya no eres millenial");
    }
} else {
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/* Operadores lógicos
   AND(y):  &&
   OR(o):   ||
   Negación: !
*/

var year = 2020;
if(year != 2016){
    console.log("El año no es 2016, realmente es: " + year);
}

// AND
if(year >= 2000 && year <= 2020 && year != 2018) { 
    console.log("Estamos en la era actual");
}else {
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2008  || (year == 2018 || year == 2028)){
    console.log("El año termina con 8");
} else {
    console.log("AÑO NO REGISTRADO");
}