'use strict'


// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("Es resultado de la operación es: " + operacion);

// Tipos de datos
var numero_entero = 44;                         // tipo integer
var cadena_texto = "Hola 'que' tal";            // tipo string
var verdadero_o_falso = true;                  // tipo boolean

var numero_falso = "33";                        // tipo string

console.log(numero_falso + 7);                  // aquí concatena string con 7, resultado: "337"

console.log(Number(numero_falso) + 7);          // Number() cambia a número el parámetro "var String"
console.log(String(numero_entero)+" años");     // String() cambia a texto el parámetro "var Integer"
console.log(String(verdadero_o_falso)+"sday");  // String() "var boolean" >> concatena textos
console.log(Number(verdadero_o_falso) + 1);     // String() "var boolean" >> opera como números

console.log(numero_entero, typeof numero_entero);              // typeof >> indica de qué tipo es la variable
console.log(cadena_texto, typeof cadena_texto);
console.log(verdadero_o_falso, typeof verdadero_o_falso);
console.log(numero_falso, typeof numero_falso);

