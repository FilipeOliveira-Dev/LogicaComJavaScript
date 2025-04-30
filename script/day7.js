// DESAFIO 07 - FUNCOES EM JAVASCRIPT
    // Criar a sua própria calculadora, porém cada operação deverá ser uma função diferente no seu código.
    // Primeiro, a pessoa escolhe uma opção de operação impressa pelo programa na tela.
    // Depois, ela deve inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.
    // As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".

function calculadora(){
    // RECEBE O VALOR DIGITADO PELO USUÁRIO
    operacao = prompt(`Qual operação você deseja executar? Digite:
        1. Soma (+)
        2. Subtração (-)
        3. Multiplicaçnao (x)
        4. Divisão (÷)
        5. Sair do programa`)
    
    // VALIDACAO DO VALOR DIGITADO
    if (operacao == "") {
        alert("Não foi informado nenhuma opção")
        calculadora();
    } else if (operacao >= 1 && operacao <= 4) {
        valor1 = prompt(`Insira o primeiro valor:`);
        valor2 = prompt(`Insira o segundo valor:`);
        
        // ENCAMINHA PARA A FUNÇÃO CORRETA
        switch (operacao) {
            case "1":
                alert(`O resultado da operação é ${soma(valor1, valor2)}`)
                break;
            case "2":
                alert(`O resultado da operação é ${soma(valor1, valor2)}`)
                break;
            case "3":
                alert(`O resultado da operação é ${soma(valor1, valor2)}`)
                break;
            case "4":
                alert(`O resultado da operação é ${soma(valor1, valor2)}`)
                break;
        }
        
    } else if (operacao == 5){
        sairDoPrograma();
    } else {
        alert("Opção inválida")
        calculadora();
    }
}

function soma(valor1, valor2) {
    alert("Função Soma")
    return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2) {
    alert("Função Menos")
    return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2) {
    alert("Função Vezes")
    return Number(valor1) * Number(valor2);
}

function divisao(valor1, valor2) {
    alert("Função Divisao")
    return Number(valor1) / Number(valor2);
}

function sairDoPrograma() {
    alert("Até a próxima!!")
}