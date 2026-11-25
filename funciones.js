// Función declarativa
export function sumar(num1, num2){
    const resultado = Number(num1) + Number(num2)
    return resultado
}


// Función expresada 

export const restar = function (num1, num2){
    const resultado = Number(num1) - Number(num2)
    return resultado
}


// Función Flecha

export const multiplicar = (num1,num2) => Number(num1) * Number(num2)