// DESAFIO 03 - FLUXO DE DECISÃO

// O desafio é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:
  // 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End. 
  // 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
  // 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
  // 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. 
  //   e, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

// FUNCAO DE DECISAO DE CARREIRA INICIAL
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

// FUNCAO DA ESPECIALIDADE FRONT-END
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
  
// FUNCAO DA ESPECIALIDADE BACK-END
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

// FUNCAO DA ESPECIALIZACAO
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