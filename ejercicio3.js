/*
* Dar la funcionalidad de sumar y restar a la calculadora, mostrando el resultado en el elemento con clase resultado. Si el resultado de la resta entrega un número negativo debes mostrar un 0.
*/
"use strict;"
/*
* Se convierten a Int y se almacenan en variables los valores ingresados en los input
*/
document.getElementById("valor1").value = 0
document.getElementById("valor2").value = 0

document.querySelector(".resultado").innerHTML = 0
document.getElementById("btn-sumar").addEventListener("click", e => {
    let value1 = parseInt(document.getElementById("valor1").value)
    let value2 = parseInt(document.getElementById("valor2").value)
    let result = value1 + value2
    document.querySelector(".resultado").innerHTML = result
})
document.getElementById("btn-restar").addEventListener("click", e => {
    let value1 = parseInt(document.getElementById("valor1").value)
    let value2 = parseInt(document.getElementById("valor2").value)
    let result = value1 - value2
    if (result <= 0) {
        result = 0
    } 
    document.querySelector(".resultado").innerHTML = result
})
