// DESAFIO 04 - MAIS LOOPS E RANDOMIZAÇAO
// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

function adinharNumero() {
    let numeroParaAdivinhar = Math.floor(Math.random() * (10 - 1 + 1) + 1); // Número que o usuário deve adivinhar
    let tentativas = 3; // Número de tentativas
    let tentativasRestantes = 3

    while (tentativasRestantes > 0 ) {
        let chute = obterNumeroEntre1e10()
        
        if (chute == numeroParaAdivinhar) {
            alert(`Parabéns, você acertou, o número secreto era o ${numeroParaAdivinhar}!`)
            return;
        } else {
            tentativasRestantes = tentativasRestantes - 1;
            
            // VALIDACAO SE NUMERO SECRETO É MAIOR OU MENOR QUE O DIGITADO
            if (tentativasRestantes > 0) {
                tentativas --;
                if(chute > numeroParaAdivinhar) {
                  alert(`Errado! O número secreto é menor! Tentativas restantes: ${tentativasRestantes}.`)
                } else {
                  alert(`Errado! O número secreto é maior! Tentativas restantes: ${tentativasRestantes}.`)
                }
            } else {
                alert (`Você não acertou, o número secreto era ${numeroParaAdivinhar}`)
            }
        }
    } 
}

function obterNumeroEntre1e10() {
    let numeroDigitado;
  
    while (true) {
      const entrada = prompt("Por favor, digite um número entre 1 e 10:");
  
      // Converter a entrada para um número
      numeroDigitado = Number(entrada);
  
      // Verificar se a conversão foi bem-sucedida (não é NaN) e se o número está dentro do intervalo
      if (!isNaN(numeroDigitado) && Number.isInteger(numeroDigitado) && numeroDigitado >= 1 && numeroDigitado <= 10) {
        return numeroDigitado; // Retorna o número válido
      } else {
        alert("Valor inválido. Por favor, digite um número inteiro entre 1 e 10.");
      }
    }
  }