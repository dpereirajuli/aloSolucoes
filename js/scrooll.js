// Seleciona todos os links com a classe "smooth-scroll"
const links = document.querySelectorAll('.smooth-scroll');

// Adiciona um evento de clique a cada link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = link.getAttribute('href'); // Pega o ID da seção alvo
        const targetSection = document.querySelector(targetId); // Seleciona a seção alvo

        if (targetSection) {
            // Faz a rolagem suave até a seção alvo
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});