// Referencias del DOM
const $h1 = document.querySelector("h1")

$h1.style.color ="green"
$h1.style.fontSize ="50px"

console.log($h1)

//const $h2 = document.querySelector("h2")
const $h2 = document.querySelector("#titulo2")
$h2.style.color ="red"
$h2.style.fontSize ="25px"
console.log($h2)

const $btnSumar = document.querySelector("#btnSumar")
const $num1 = document.querySelector("#num1")
const $num2 = document.querySelector("#num2")

// Eventos

$btnSumar.addEventListener("click",()=>{
    console.log("Clickkkk")
    console.log("num1",$num1.value)
    console.log("num2",$num2.value)
})

