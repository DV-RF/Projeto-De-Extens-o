document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio sem validação

    // Verifica se todas as perguntas foram respondidas
    if (!document.querySelector('input[name="setor"]:checked') ||
        !document.querySelector('input[name="carga"]:checked') ||
        !document.querySelector('input[name="colegas"]:checked') ||
        !document.querySelector('input[name="lideranca"]:checked') ||
        !document.querySelector('input[name="seguranca"]:checked') ||
        !document.querySelector('input[name="valorizacao"]:checked') ||
        !document.querySelector('input[name="condicoes"]:checked') ||
        !document.querySelector('input[name="avaliacao"]:checked') ||
        !document.querySelector('textarea[name="melhoria"]').value ||
        !document.querySelector('textarea[name="comentarios"]').value) {
        
        alert("Por favor, preencha todas as perguntas antes de enviar.");
        return;
    }

    alert("Resposta enviada com sucesso!");
    document.getElementById("formulario").reset();
});

// Exibir campo de texto na pergunta 1 ao selecionar "Outro"
document.getElementById("outro").addEventListener("change", function() {
    document.getElementById("campoOutro").style.display = this.checked ? "block" : "none";
});