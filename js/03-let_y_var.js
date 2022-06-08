'use strict'

// Prueba con var 

var numero = 40; // valor 40
console.log(numero)

if (true) {
    numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba con let

var texto = "Curso JS victorrobles";
console.log(texto); // valor ""

if (true) {
    let texto = "Curso Laravel 5 victorrobles";
    console.log(texto); // valor Laravel 5
}

console.log(texto); //valor js

/* var define una variable GLOBAL
   y let funciona a nivel de bloque */