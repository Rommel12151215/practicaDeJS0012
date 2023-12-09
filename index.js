// Código de la calculadora
function calcular(num1, operador, num2) {
    let resultado;
    switch(operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
    }
    return resultado;
 }
 
 console.log(calcular(5, '+', 3)); // Resultado: 8
 console.log(calcular(5, '-', 3)); // Resultado: 2
 console.log(calcular(5, '*', 3)); // Resultado: 15
 console.log(calcular(5, '/', 3)); // Resultado: 1.6666666666666667
 