// DESAFIO 05 - LOOPS E COLEÇOES
// Criar um programa que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
// Depois ele perguntará qual comida você deseja inserir, e você digitará o nome dela
// Depois ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticinios, congelados, doces e outros
// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:
// O programa deverá imprimir, por exemplo:

//Lista de compras:
    // Frutas: banana, tomate, maçã, uva, abacate
    // laticinios: leite vegetal, leite de vaca, leite em pó
    // Congelados:
    // Doces: chiclete e bala de ursinho


function listaDeCompras() {
    adicionarItem = prompt("Você deseja incluir um item na sua lista de compras? S/N")
    adicionarItem = adicionarItem.toUpperCase()  // Colocando o valor digitado em maiúscula

    if(adicionarItem != "S" && adicionarItem != "N") {
        alert("Dado incorreto, digite 'S' para Sim, e 'N' para Não");
        listaDeCompras();    
    } else if (adicionarItem == "S"){
        adicionarItemNaLista();
    } else if (adicionarItem == "N") {
        alert("Lista de compras vazia, nenhum item para mostrar");
    }
}

// CRIANDO ARRAYS PARA AS CATEGORIAS
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];
let maisItens = "S";

function adicionarItemNaLista () {
    while (maisItens.toUpperCase() === "S") {
        // ADICIONA O ITEM NA LISTA
        itemDaLista = prompt("Qual item deseja inserir na lista de compras?");

        if (itemDaLista == "") {
            continue;
        } else {
            categoriaDoItem = prompt(`Qual é categoria desse item?
            1. Frutas
            2. Laticinios
            3. Congelados
            4. Doces
            5. Outros`)

            if (categoriaDoItem >= 1 && categoriaDoItem <= 5) {
                
                switch (categoriaDoItem) {
                    case "1":
                        frutas.push(itemDaLista);
                        break;
                    case "2":
                        laticinios.push(itemDaLista);
                        break;
                    case "3":
                        congelados.push(itemDaLista);
                        break;
                    case "4":
                        doces.push(itemDaLista);
                        break;
                    case "5":
                        outros.push(itemDaLista);
                        break;
                }
                exibirListaAtualizada();
                maisItens = prompt("Gostaria de adicionar mais itens na lista de compras? (S/N)");
                
            } else {
                alert("Valor inválido. Por favor, digite 1.Frutas / 2.Laticínios / 3.Congelados / 4.Doces / 5.Outros");
            }
        }
    }
    exibirListaAtualizada();
    
    excluirItemNaLista();

    exibirListaAtualizada();
}


function exibirListaAtualizada (){
    alert(`Lista de compras atualizada:
        Frutas: ${frutas.join(" , ")}
        Laticínios: ${laticinios.join(" , ")}
        Congelados: ${congelados.join(" , ")}
        Doces: ${doces.join(" , ")}
        Outros: ${outros.join(" , ")}
        `);
}



// DESAFIO 06 - REMOCAO DE ARRAYS
    // Criar a opção de remover algum item da lista,
    // Caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
    // O programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
    // Ele voltará para o ciclo inicial de perguntas.
    // Se não for encontrado o item na lista, deverá exibir uma mensagem avisando.

function excluirItemNaLista(){
    let excluirItens = "S";
    if(frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0 && outros === 0){  //se a lista estiver vazia
		alert(`A lista está vazia!`);
    } else {
        while (excluirItens === "S") {
            excluirItens = prompt("Gostaria de excluir algum item da lista de compras? (S/N)");
            excluirItens = excluirItens.toUpperCase();
            
            if (excluirItens == "N"){
                return;
            } else if (excluirItens == "S"){
                itemParaExcluir = prompt(`Qual item deseja excluir?\n Frutas: ${frutas}\n laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Outros: ${outros}`);

                if(frutas.indexOf(itemParaExcluir) != -1){
                    frutas.splice(frutas.indexOf(itemParaExcluir), 1);
                    alert(`O item ${itemParaExcluir} foi removido com sucesso!`)
                } else if(laticinios.indexOf(itemParaExcluir) != -1){
                    laticinios.splice(laticinios.indexOf(itemParaExcluir), 1);
                    alert(`O item ${itemParaExcluir} foi removido com sucesso!`)
                } else if (congelados.indexOf(itemParaExcluir) != -1){
                    congelados.splice(congelados.indexOf(itemParaExcluir), 1);
                    alert(`O item ${itemParaExcluir} foi removido com sucesso!`)
                } else if (doces.indexOf(itemParaExcluir) != -1){
                    doces.splice(doces.indexOf(itemParaExcluir), 1);
                    alert(`O item ${itemParaExcluir} foi removido com sucesso!`)
                } else if (outros.indexOf(itemParaExcluir) != -1){
                    outros.splice(outros.indexOf(itemParaExcluir), 1);
                    alert(`O item ${itemParaExcluir} foi removido com sucesso!`)
                } else {
                    alert(`Não foi possível encontrar o item dentro da lista!`)
                }
            }
        }          
        exibirListaAtualizada();
    } 
}