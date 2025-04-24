// DESAFIO 05 - LOOPS E COLEÇOES
// Criar um programa que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
// Depois ele perguntará qual comida você deseja inserir, e você digitará o nome dela
// Depois ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e outros
// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:
// O programa deverá imprimir, por exemplo:

//Lista de compras:
    // Frutas: banana, tomate, maçã, uva, abacate
    // Laticínios: leite vegetal, leite de vaca, leite em pó
    // Congelados:
    // Doces: chiclete e bala de ursinho

function listaDeCompras() {
    adicionarItem = prompt("Você deseja um item na sua lista de compras? S/N")
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

function adicionarItemNaLista () {
    // CRIANDO ARRAYS PARA AS CATEGORIAS
    let frutas = [];
    let laticínios = [];
    let congelados = [];
    let doces = [];
    let outros = [];
    let maisItens = "S";
    
    while (maisItens.toUpperCase() === "S") {
        // ADICIONA O ITEM NA LISTA
        itemDaLista = prompt("Qual comida você deseja inserir na lista de compras?");
        if (itemDaLista == "") {
            continue;
        } else if (itemDaLista != ""){
            categoriaDoItem = prompt(`Qual é categoria desse item? 
                                        1. Frutas
                                        2. Laticínios
                                        3. Congelados
                                        4. Doces
                                        5. Outros
                                    `)
            if (categoriaDoItem >= 1 && categoriaDoItem <= 5) {
                
                switch (categoriaDoItem) {
                    case "1":
                        frutas.push(itemDaLista);
                        break;
                    case "2":
                        laticínios.push(itemDaLista);
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
                maisItens = prompt("Gostaria de adicionar mais itens na lista de compras? (S/N)");
                
            } else {
                alert("Valor inválido. Por favor, digite 1.Frutas / 2.Laticínios / 3.Congelados / 4.Doces / 5.Outros");
            }
            continue;
        }

    }
    alert(`Lista de compras:
            Frutas: ${frutas.join(" , ")}
            Laticínios: ${laticínios.join(" , ")}
            Congelados: ${congelados.join(" , ")}
            Doces: ${doces.join(" , ")}
            Outros: ${outros.join(" , ")}
         `);
}