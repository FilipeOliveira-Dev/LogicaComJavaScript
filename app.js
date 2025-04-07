// DESAFIO 01 - Operações Booleanas

function operacaoBooleana () {
  
  let numeroUm = 1
  let stringUm = '1'
  let numeroTrinta = 30
  let stringTrinta = '30'
  let numeroDez = 10
  let stringDez = '10'

  if (numeroUm == stringUm) {
    console.log(`As variáveis ${numeroUm}(Número) e ${stringUm}(String) tem o mesmo valor, mas tipos diferentes`)
  } else {
    console.log(`As variáveis ${numeroUm}(Número) e ${stringUm}(String) não tem o mesmo valor`)
  }

  if (numeroTrinta === stringTrinta) {
    console.log(`As variáveis ${numeroTrinta}(Número) e ${stringTrinta}(String) tem o mesmo valor e mesmo tipo`)
  } else {
    console.log(`As variáveis ${numeroTrinta}(Número) e ${stringTrinta}(String) não tem o mesmo tipo`)
  }

  if (numeroDez == stringDez) {
    console.log(`As variáveis ${numeroDez}(Número) e ${stringDez}(String) tem o mesmo valor, mas tipos diferentes`)
  } else {
    console.log(`As variáveis ${numeroDez}(Número) e ${stringDez}(String) não tem o mesmo valor`)
  }
}