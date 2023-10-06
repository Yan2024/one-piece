/* 
Prerrogativa:
    Quando clicar no botão do personagem na lista, esse botão deve ficar marcado e mostrar o personagem correspondente

Objetivo 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado

    Passo 1: Pegar os botões no JS pra poder verificar quando o usuário clicar em cima deles
    Passo 2: Adicionar a classe "selecionado" no botão que o usuário clicou
    Passo 3: Verificar se já existe um botão selecionado, se sim, deve ser removida a seleção dele

Objetivo 2 - Quando clicar no botão do personagem, mostrar as informações desse personagem

    Passo 1: Pegar os personagens no JS para poder mostrar ou esconder ele
    Passo 2: Adicionar a classe "selecionado" no personagem que o usuário selecionou
    Passo 3: Verificar se já existe um personagem selecionado, se sim, deve ser removida a seleção dele.
        */

// Código:

const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        retirarSelecaoBotao();
        retirarSelecaoPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
})

function retirarSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
function retirarSelecaoBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}