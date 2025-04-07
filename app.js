// DESAFIO 01 - Operações Booleanas
function operacaoBooleana () {
  let numeroUm = 1;
  let stringUm = '1';
  let numeroTrinta = 30;
  let stringTrinta = '30';
  let numeroDez = 10;
  let stringDez = '10';

  if (numeroUm == stringUm) {
    alert(`As variáveis ${numeroUm}(Número) e ${stringUm}(String) tem o mesmo valor, mas tipos diferentes`)
  } else {
    alert(`As variáveis ${numeroUm}(Número) e ${stringUm}(String) não tem o mesmo valor`)
  }

  if (numeroTrinta === stringTrinta) {
    alert(`As variáveis ${numeroTrinta}(Número) e ${stringTrinta}(String) tem o mesmo valor e mesmo tipo`)
  } else {
    alert(`As variáveis ${numeroTrinta}(Número) e ${stringTrinta}(String) não tem o mesmo tipo`)
  }

  if (numeroDez == stringDez) {
    alert(`As variáveis ${numeroDez}(Número) e ${stringDez}(String) tem o mesmo valor, mas tipos diferentes`)
  } else {
    alert(`As variáveis ${numeroDez}(Número) e ${stringDez}(String) não tem o mesmo valor`)
  }
}

// DESAFIO 02 - VARIÁVEIS
function dadosUsuario () {
  let nome = prompt("Qual é o seu nome?");
    if(nome == "") {
      alert("Você não digitou nada!");
      return dadosUsuario();
    }

  let idade = prompt("Qual a sua idade?");
    if(idade == "") {
      alert("Informe a sua idade, por favor!");
      return dadosUsuario();
    }

  let linguagem = prompt("Qual a sua linguagem de programação favorita?");
    if(linguagem == "") {
      alert("Você não digitou nada. Informe sua linguagem favorita!");
      return dadosUsuario();
    }

  alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

  let resposta = prompt(`Mas, você gosta de estudar a linguagem ${linguagem}? S/N`);
  if (resposta == "S") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  } else if (resposta == "N") {
    alert("Ahh que pena... Aconselho a estudar outras linguagens");
  } else {
    alert("Resposta inválida. Por favor, responda apenas com 'S' ou 'N'.");
  }
}