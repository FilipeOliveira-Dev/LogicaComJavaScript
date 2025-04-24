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
    } 
    else if (resposta == "N") {
      alert("Ahh que pena... Aconselho a estudar outras linguagens");
    } 
    else {
      alert("Resposta inválida. Por favor, responda apenas com 'S' ou 'N'.");
    }
  }