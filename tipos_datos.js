//Variables
/**
 * Variable Global (deprecado)
 */
var num = 10

//console.log(num)

/**
 * Variables locales
 */

let nombre = "Darren"

const PI = 3.1416

/**
 * Tipos de datos primitivos
 */

 // Strings (cadena de texto)


let saludo = "Hola";
const amigo = "Darren";

const mensaje = saludo + ' ' + amigo;

const plantilla = `Saludo: ${saludo} ${amigo}`

console.log(mensaje)
console.log(plantilla)

// Number

let num1 = 1
let num2 = 1.16
let num3 = "2" // El valor es string
const suma = num1 + num2 + num3


console.log(suma)
//console.log(NaN)
console.log(undefined+5)

//Boolean

const verdadero = true
const falso= false

// Null

const nulo = null

// undefined 

const noDefinido = undefined

/**
 * Datos compuestos
 */

// Arrays

const fruits = ["banana"]

fruits.push("orange")
fruits.push(5)
fruits.push(true)
fruits.push(["Darren","Gilbert","Johan","Ainoha"])


console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[4])
console.log(fruits)


// Object

const person = {
    name : "Darren",
    age: 27,
    favorite_foods:[
        "Ceviche"
    ]
}

console.log(person.name)
console.log(person.age)
console.log(person.favorite_foods)

