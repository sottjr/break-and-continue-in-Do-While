/* USO DOS COMANDOS BREAK E CONTINUE EM UM LAÇO DE REPETIÇÃO {do... while} */

alert("Se o número for par calculará o dobro, se for ímpar calculará o triplo")
alert("Digite 0 para sair");
//inicio da repetição
do {
var num = Number(prompt("Número: "));

if (num == 0 || isNaN(num)) {
    var sair = confirm("Confirma a saída?"); //solicita um confirmação do usuário se o número for 0 ou se não for um número. onde retornará (true (ok) ou false (cancelar))
    if (sair) {
        break //vai parar a repetição do comando, vai sair do laço. (ao clicar em ok)
    }
    else {
        continue; //voltará ao início do laço (ao clicar em cancelar)
    }
} 

//se par, mostra o dobro; ímpar, mostra o triplo.
if (num % 2 == 0) {
    alert(`O dobro de ${num} é: ${(num * 2)}`);
}
else {
    alert(`O triplo de ${num} é ${(num * 3)}`);
}

} while (true) //enquanto é verdade só sai do laço, pelo break

alert("Bye bye...")