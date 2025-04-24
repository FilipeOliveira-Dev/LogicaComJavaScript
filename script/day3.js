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