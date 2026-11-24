import  { sumar } from "./funciones.js"

// Referencias del DOM
const $h1 = document.querySelector("#mi$H1")

$h1.style.color ="green"
$h1.style.fontSize ="50px"

// $h1.style.display="none";
$h1.classList.add("activo")

console.log($h1)

//const $h2 = document.querySelector("h2")  
const $h2 = document.querySelector("#titulo2")
$h2.style.color ="red"
$h2.style.fontSize ="25px"
console.log($h2)


// recojo en constantes los elementos html de los input donde se escribe y del boton sumar
const $btnSumar = document.querySelector("#btnSumar")
const $num1 = document.querySelector("#num1")  // manera de recoger una variable como haciamos con jquery. mera costumbre cuando se trata de un objeto
const $num2 = document.querySelector("#num2")  // actual que vale para todo

// cogemos el input donde debe ir el resultado ****
const inputResultado = document.querySelector("#inputResultado")

// Eventos
$btnSumar.addEventListener("click",()=>{
   const resultado = sumar($num1.value,$num2.value)
    inputResultado.value = resultado
})