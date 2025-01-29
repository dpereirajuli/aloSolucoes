// Função para abrir e fechar a modal de Termos de Uso
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal-termos');
    const abrirModal = document.querySelector('.abrir-modal');
    const fecharModal = document.querySelector('.fechar-modal');

    // Abrir modal ao clicar em "Termos de Uso"
    abrirModal.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Fechar modal ao clicar no "X"
    fecharModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fechar modal ao clicar fora da área do conteúdo
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Função para enviar formulário (validação do checkbox)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const checkbox = document.getElementById('termos');

    if (!checkbox.checked) {
        e.preventDefault();
        alert('Por favor, aceite os Termos de Uso para continuar.');
    } else {
        // Coletar dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const cpf = document.getElementById('cpf').value;

        // Mensagem para WhatsApp
        const mensagemWhatsApp = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nCPF: ${cpf}`;
        const urlWhatsApp = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagemWhatsApp)}`;

        // Abrir WhatsApp
        window.open(urlWhatsApp, '_blank');

        // Enviar e-mail (simulação)
        const assunto = "Nova Simulação - Alô Soluções Financeiras";
        const corpoEmail = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nCPF: ${cpf}`;
        const mailtoLink = `mailto:contato@alosolucoes.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;

        // Abrir cliente de e-mail
       // window.location.href = mailtoLink;

        // Limpar formulário
        document.getElementById('contact-form').reset();
    }
});