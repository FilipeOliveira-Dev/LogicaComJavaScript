// DESAFIO 01 - Operações Booleanas

  // Reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

  // let numeroUm = 1
  // let stringUm = '1'
  // let numeroTrinta = 30
  // let stringTrinta = '30'
  // let numeroDez = 10
  // let stringDez = '10'

function operacaoBooleana () {
  // DECLARACAO DAS VARIAVEIS
  let numeroUm = 1;
  let stringUm = '1';
  let numeroTrinta = 30;
  let stringTrinta = '30';
  let numeroDez = 10;
  let stringDez = '10';

  if (numeroUm == stringUm) {
    alert(`As variáveis ${numeroUm}(Número) e ${stringUm}(String) tem o mesmo valor, mas tipos diferentes`)
  }
  else {
    alert(`As variáveis ${numeroUm}(Número) e ${stringUm}(String) não tem o mesmo valor`)
  }

  if (numeroTrinta === stringTrinta) {
    alert(`As variáveis ${numeroTrinta}(Número) e ${stringTrinta}(String) tem o mesmo valor e mesmo tipo`)
  }
  else {
    alert(`As variáveis ${numeroTrinta}(Número) e ${stringTrinta}(String) não tem o mesmo tipo`)
  }

  if (numeroDez == stringDez) {
    alert(`As variáveis ${numeroDez}(Número) e ${stringDez}(String) tem o mesmo valor, mas tipos diferentes`)
  }
  else {
    alert(`As variáveis ${numeroDez}(Número) e ${stringDez}(String) não tem o mesmo valor`)
  }
}