/**
 * 1 Condicionales [3 puntos]
 * 
 * Crear un programa que pida al usuario(prompt) que introduzca uno de los siguientes caracteres: + - x /
 * 
 * Si introduce '+' mostrar por consola 'sumar'
 * Si introduce '-' mostrar por consola 'restar'
 * Si introduce 'x' mostrar por consola 'multiplicar'
 * Si introduce '/' mostrar por consola 'dividir'
 * Si no introduce ninguno de los anteriores, mostrar :'no conozco esa operación'
 * 
 */

console.log('ejercicio 1') //no quitar este console.log, empezar debajo el ejercicio
let tecla = window.prompt("Introduce uno de los siguientes caracteres")
if (tecla === "+") {
    console.log("sumar");

} else if (tecla === "-") {
    console.log("restar");

} else if (tecla === "x") {
    console.log("multiplicar");

} else if (tecla === "/")
    console.log("dividir");
else {
    console.log("no conozco esta operacion");
}

