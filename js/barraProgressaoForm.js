const form = document.getElementById('contact-form'); // Seleciona o formulário correto
const inputs = form.querySelectorAll('input'); // Seleciona todos os campos de input
const progressBar = document.getElementById('progressBar'); // Seleciona a barra de progresso

function updateProgressBar() {
    let filledFields = 0;

    inputs.forEach(input => {
        // Verifica se o campo é um checkbox
        if (input.type === 'checkbox') {
            if (input.checked) { // Se o checkbox estiver marcado, conta como preenchido
                filledFields++;
            }
        }
        // Verifica se o campo é um input normal e não está vazio
        else if (input.value.trim() !== '') {
            filledFields++;
        }
    });

    // Calcula o progresso com base no número de campos preenchidos
    const progress = (filledFields / inputs.length) * 100;
    progressBar.style.width = `${progress}%`; // Atualiza a largura da barra de progresso
}

// Adiciona um evento de input a todos os campos
inputs.forEach(input => {
    input.addEventListener('input', updateProgressBar);
});

// Adiciona um evento de change ao checkbox para atualizar o progresso quando ele é marcado/desmarcado
const checkbox = document.getElementById('termos'); // Seleciona o checkbox
checkbox.addEventListener('change', updateProgressBar);

// Inicializa a barra de progresso ao carregar a página
updateProgressBar();