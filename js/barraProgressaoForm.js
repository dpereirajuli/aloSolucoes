document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input:not([type=submit])");
    const progressBar = document.getElementById("progress-bar");
    const formContainer = document.getElementById("form-container");
    const nextStep = document.getElementById("next-step");

    function updateProgress() {
        let filledFields = 0;
        inputs.forEach(input => {
            if ((input.type === "checkbox" && input.checked) || (input.type !== "checkbox" && input.value.trim() !== "")) {
                filledFields++;
            }
        });
        const progress = (filledFields / inputs.length) * 100;
        progressBar.style.width = progress + "%";
    }

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
});