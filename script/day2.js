// DESAFIO 02 - VARIÁVEIS

// O programa deve pedir para o usuário responder 3 perguntas:
  // - Qual o seu nome?
  // - Quantos anos você tem?
  // - Qual linguagem de programação você está estudando?

// No final, o sistema vai exibir a mensagem:
  // "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

function dadosUsuario () {
    let nome = prompt("Qual é o seu nome?");
      if(nome == "") {
        alert("Você não digitou nada! Vamos tentar novamente.");
        dadosUsuario();
      }
  
    let idade = prompt("Qual a sua idade?");
      if(idade == "") {
        alert("Você não digitou nada! Vamos tentar novamente.");
        dadosUsuario();
      }
  
    let linguagem = prompt("Qual a sua linguagem de programação favorita?");
      if(linguagem == "") {
        alert("Você não digitou nada! Vamos tentar novamente.");
        dadosUsuario();
      }
  
    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
  
    let resposta = prompt(`Mas, você gosta de estudar a linguagem ${linguagem}? S/N`);
      if (resposta.toUpperCase() == "S") {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
      } 
      else if (resposta.toUpperCase() == "N") {
        alert("Ahh que pena... Aconselho a estudar outras linguagens");
      } 
      else {
        alert("Resposta inválida! Vamos tentar novamente.");
        dadosUsuario();
      }
}