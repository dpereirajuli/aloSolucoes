const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input'); // Seleciona todos os campos de input
const progressBar = document.getElementById('progressBar');

function updateProgressBar() {
    let filledFields = 0;

    inputs.forEach(input => {
        if (input.value.trim() !== '') { // Verifica se o campo não está vazio
            filledFields++;
        }
    });

    const progress = (filledFields / inputs.length) * 100; // Calcula o progresso
    progressBar.style.width = `${progress}%`; // Atualiza a barra de progresso
}

// Adiciona um evento de input a todos os campos
inputs.forEach(input => {
    input.addEventListener('input', updateProgressBar);
});



    inputs.forEach(input => {
        input.addEventListener("input", updateProgress);
        input.addEventListener("change", updateProgress);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio real para demonstração

        // Animação de saída do formulário
        formContainer.style.opacity = "0";
        formContainer.style.transform = "translateX(-100%)";

        // Aguarda a animação terminar antes de ocultar o formulário
        setTimeout(() => {
            formContainer.style.display = "none";

            // Exibe a próxima etapa com animação
            nextStep.style.display = "block";
            setTimeout(() => {
                nextStep.style.opacity = "1";
                nextStep.style.transform = "translateX(0)";
            }, 10); // Pequeno delay para garantir que o display: block seja aplicado antes da animação
        }, 500); // Tempo correspondente à duração da animação
    });

    updateProgress(); // Inicializar progresso corretamente
