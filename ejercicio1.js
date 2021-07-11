/*
* Desarrollar un código para validar un formulario de contacto utilizando el evento submit y las expresiones regulares que permitan el ingreso de caracteres desde la “A-a” hasta la “Z-z” mediante el método test() de JavaScript, mostrando un mensaje de error y/o éxito cuando corresponda. Es decir, el usuario deberá obligatoriamente ingresar datos en el formulario y que estos solo sean caracteres alfabéticos de la “a” hasta la “z” para poder enviar la información. 
*/

"use strict;"
/*
* Acceder al formulario 
*/
let form = document.getElementById("formulario");

/*
* Acceder al evento Submit 
*/
form.addEventListener("submit", e => {
    
    e.preventDefault(); // Previene que recargue la página al enviar el formulario
/*
* Almacena el texto introducido en el formulario, en variables 
*/    
    let fullname = document.querySelector("#nombre").value;
    let subject = document.querySelector("#asunto").value;
    let message = document.querySelector("#mensaje").value;
    
    validate(fullname, subject, message) // Función que valida lo ingresado
    
    //console.log(`Nombre: ${fullname}, Asunto: ${subject}, Mensaje: ${message}`)
    
})
/*
* Constructor de función validate 
*/
let validate = (fullname, subject, message) => {
    
    let validForm = true // Variable que valida el formulario completo
    
/*
* Validación de campo Nombre 
*/
    let validFullname = /^[a-z ]+$/gi 
    if (!validFullname.test(fullname)){
        document.querySelector(".errorNombre").innerHTML = "Debes ingresar algo (solo letras)"
        validForm = false
    } else{
        document.querySelector(".errorNombre").innerHTML = ""
    }
/*
* Validación de campo Asunto 
*/    
    let validSubject = /[a-z]/gi
    if (!validSubject.test(subject)){
        document.querySelector(".errorAsunto").innerHTML = "Debes ingresar algo (no sólo números"
        validForm = false
    } else{
        document.querySelector(".errorAsunto").innerHTML = ""
    }
/*
* Validación de campo Mensaje 
*/
    let validMessage = /[a-z]/gi
    
    if (!validMessage.test(message)){
        document.querySelector(".errorMensaje").innerHTML = "Debes ingresar algo (no sólo números"
        validForm = false
    } else{
        document.querySelector(".errorMensaje").innerHTML = ""
    }
/*
* Muestra mensaje de éxito si el formulario pasa la validación 
*/    
    if (validForm){document.querySelector(".errorMensaje").innerHTML = "Su mensaje se ha enviado exitosamente (:"}
}