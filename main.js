import { getHero, searchHeroe } from "./api.js"
import  { multiplicar, restar, sumar } from "./funciones.js"

// Referencias del DOM
const $h1 = document.querySelector("#miH1")

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







// Super Hero API

const $btnSearchHero = document.querySelector("#btnSearchHero")
const $txtSearchHero = document.querySelector("#txtSearchHero")



$btnSearchHero.addEventListener("click",async()=>{

const result = await getHero("1")
console.log({result})
    
})




// recojo en constantes los elementos html de los input donde se escribe y del boton sumar
const $btnSumar = document.querySelector("#btnSumar")
const $btnRestar = document.querySelector("#btnRestar")
const $btnMultiplicar = document.querySelector("#btnMultiplicar")
const $num1 = document.querySelector("#num1")  // manera de recoger una variable como haciamos con jquery. mera costumbre cuando se trata de un objeto
const $num2 = document.querySelector("#num2")  // actual que vale para todo

// cogemos el input donde debe ir el resultado ****
const inputResultado = document.querySelector("#inputResultado")

// Eventos

$btnSumar.addEventListener("click",()=>{
   const resultado = sumar($num1.value,$num2.value)
    inputResultado.value = resultado
})


$btnRestar.addEventListener("click",()=>{
   const resultado = restar($num1.value,$num2.value)
    inputResultado.value = resultado
})

$btnMultiplicar.addEventListener("click",()=>{
   const resultado = multiplicar($num1.value,$num2.value)
    inputResultado.value = resultado
})

