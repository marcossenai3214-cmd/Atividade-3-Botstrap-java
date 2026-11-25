// Seleciona o botão, o texto e o Card
const botao = document.getElementById("botaoAlterar");
const texto = document.getElementById("textoProjeto");
const card = document.getElementById("cardProjeto");

// Executa quando o botão for clicado
botao.addEventListener("click", function () {
    texto.textContent = "Este projeto foi apresentado com mais detalhes usando JavaScript!";
    card.classList.toggle("bg-light");
    botao.textContent = "Detalhes exibidos";
});
