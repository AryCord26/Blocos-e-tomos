// Seleciona os elementos do botão e da barra lateral
const toggleButton = document.getElementById("toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

// Adiciona um evento de clique no botão
toggleButton.addEventListener("click", () => {
    // Alterna a classe 'closed' para esconder/mostrar a barra lateral
    sidebar.classList.toggle("closed");
    content.classList.toggle("expanded"); // Ajusta a margem do conteúdo ao esconder a barra lateral
});
