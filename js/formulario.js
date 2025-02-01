document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input:not([type=submit])");
    const progressBar = document.getElementById("progress-bar");
    const formContainer = document.getElementById("form-container");
    const nextStepSection = document.getElementById("next-step-section");
    const userName = document.getElementById("user-name");
    const erroGeral = document.getElementById("erroGeral");

    // Função para exibir erro geral
    function mostrarErroGeral(mensagem) {
        erroGeral.textContent = mensagem;
        erroGeral.style.display = "block";  // Torna o erro visível
        erroGeral.style.opacity = 1; // Torna o erro opaco
        erroGeral.style.animation = "erroSlide 0.5s forwards"; // Aplica a animação

        // Remove a animação depois de 1 segundo (tempo suficiente para ela ser vista)
        setTimeout(() => {
            erroGeral.style.animation = ''; // Reseta a animação
        }, 1000);
    }

    // Função para limpar erro geral
    function limparErros() {
        erroGeral.style.opacity = 0;
        erroGeral.style.display = "none"; // Esconde a mensagem de erro
    }

    // Função para validar o email
    function validarEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regexEmail.test(email);
    }

    // Função para validar o telefone
    function validarTelefone(telefone) {
        const regexTelefone = /^\(\d{2}\)\s?\d{5}-\d{4}$/; // Exemplo de formato: (11) 91234-5678
        return regexTelefone.test(telefone);
    }

    // Função para validar CPF
    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11) return false;

        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;

        return true;
    }

    // Função para formatar o telefone
    function formatarTelefone(event) {
        let telefone = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número

        // Formata o telefone conforme a máscara (XX) XXXXX-XXXX
        if (telefone.length <= 2) {
            telefone = `(${telefone}`;
        } else if (telefone.length <= 7) {
            telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
        } else {
            telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
        }

        event.target.value = telefone;
    }

    // Função para atualizar o progresso do formulário
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

    // Adicionando a máscara ao campo de telefone
    const telefoneInput = document.getElementById("telefone");
    telefoneInput.addEventListener("input", formatarTelefone);

    // Evento de submit para validação
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio real para demonstração

        limparErros(); // Limpa a mensagem de erro antes da validação

        let formValido = true;

        // Validação dos campos
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const cpf = document.getElementById("cpf").value;

        // Valida se os campos são válidos
        if (!validarEmail(email)) {
            formValido = false;
            mostrarErroGeral("× Erro: E-mail inválido");
        }

        if (!validarTelefone(telefone)) {
            formValido = false;
            mostrarErroGeral("× Erro: Telefone inválido");
        }

        if (!validarCPF(cpf)) {
            formValido = false;
            mostrarErroGeral("× Erro: CPF inválido");
        }

        // Se o formulário for válido, avança para a próxima seção
        if (formValido) {
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
        }
    });

    updateProgress(); // Inicializar progresso corretamente
});
