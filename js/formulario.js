document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input:not([type=submit])");
    const progressBar = document.getElementById("progress-bar");
    const formContainer = document.getElementById("form-container");
    const nextStepSection = document.getElementById("next-step-section");
    const userName = document.getElementById("user-name");

    // Lógica do Carrossel
    const slides = document.querySelector(".slides");
    const prevButton = document.querySelector(".carousel button.prev");
    const nextButton = document.querySelector(".carousel button.next");
    let currentSlide = 0;

    function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : 2;
        showSlide(currentSlide);
    });

    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide < 2) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

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

        // Preenche o nome do usuário na próxima etapa
        const nomeInput = document.getElementById("nome");
        userName.textContent = nomeInput.value;

        // Animação de saída do formulário
        formContainer.style.opacity = "0";
        formContainer.style.transform = "translateX(-100%)";

        // Aguarda a animação terminar antes de ocultar o formulário
        setTimeout(() => {
            formContainer.style.display = "none";

            // Exibe a próxima etapa com animação
            nextStepSection.style.display = "block";
            setTimeout(() => {
                nextStepSection.style.opacity = "1";
                nextStepSection.style.transform = "translateX(0)";
            }, 10); // Pequeno delay para garantir que o display: block seja aplicado antes da animação
        }, 500); // Tempo correspondente à duração da animação
    });

    updateProgress(); // Inicializar progresso corretamente
});