var n1 = parsetFloat(prompt("Digite o primeiro valor:"))
var opr = parseFloat(prompt("Digite o operador(+ , - , *, / ):"))
var n2  = parsetFloat(prompt("Digite o segundo valor:"))
var resultado
switch(opr){
case '+':
    resultado = n1 + n2
    alert(resultado)
    break;
case '-':
    resultado = n1 - n2
    alert(resultado)
    break;
case '*':
    resultado = n1 * n2
    alert(resultado)
    break;
case '/':
    resultado = n1/ n2
    alert(resultado)
    break;
    default:
        alert("Operação inválida")

}
