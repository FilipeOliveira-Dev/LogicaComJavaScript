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

// DESAFIO 03 - FLUXO DE DECISÃO
function decisaoDeCarreira () {
  let area = prompt("Você quer seguir para a área de Front-End ou Back-End? (F/B)");
  area = area.toUpperCase();

    if(area != "F" && area != "B") {
      alert("Dado incorreto, digita (F) para Front-End ou (B) para Back-End");
      return decisaoDeCarreira();
    } 
     else if (area == "F") {
      let areaFront = "Front-End";
      let tecnologiaFront = especialidadeFront();
      alert(`Ótima escolha! Você escolheu a área de ${areaFront} e vai aprender ${tecnologiaFront}.`);
    } 
    else if (area == "B") {
      let areaBack = "Back-End";
      let tecnologiaBack = especialidadeBack();
      alert(`Ótima escolha! Você escolheu a área de ${areaBack} e vai aprender ${tecnologiaBack}.`);
    }
  especializacao();
}  

function especialidadeFront () { 
  tecnologiaFront = prompt("Em Front-End, você quer apreder React ou Vue? (R/V)");
  tecnologiaFront = tecnologiaFront.toUpperCase();

  if(tecnologiaFront != "R" && tecnologiaFront != "V") {
    alert("Opção inválida, digita (R) para React ou (V) para Vue");
    return especialidadeFront();
  } else if (tecnologiaFront == "R") {
    return "React";
   } else if (tecnologiaFront == "V") {
    return "Vue";
  }
}
  
function especialidadeBack () {
  tecnologiaBack = prompt("Em Back-End, você quer apreder C# ou Java? (C/J)");
  tecnologiaBack = tecnologiaBack.toUpperCase();

  if(tecnologiaBack != "C" && tecnologiaBack != "J") {
    alert("Opção inválida, digita (C) para C# ou (J) para Java");
    return especialidadeBack();
  } else if (tecnologiaBack == "C") {
    return "C#";
  } else if (tecnologiaBack == "J") {
    return "Java";
  }
}

function especializacao () {
  let especializacao = prompt(`Você quer se especializar na área escolhida ou se tornar Fullstack? (S/N)`);
  especializacao = especializacao.toUpperCase();

    if(especializacao != "S" && especializacao != "N") {
      alert("Opção inválida, digita (S) para se especializar ou (N) para Fullstack");
      return especializacao();
    } 
    else if (especializacao == "S") {
      alert("Legal! Se especializar na área escolhida é uma ótima escolha.");
      let tecnologias = [];
      let maisTecnologias = "S";
      
      while (maisTecnologias.toUpperCase() === "S") {
        let tecnologiaAdicional = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
        if(tecnologiaAdicional == "") {
          alert("Você não digitou nada!");
          continue;
        }
        tecnologias.push(tecnologiaAdicional);
        maisTecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (S/N)");
      }
      alert(`As tecnologias que você gostaria de aprender são: ${tecnologias.join(" , ")}`);
    }
    else if (especializacao == "N") {
      alert("Legal! Se tornar Fullstack é uma ótima escolha.");
    }
}