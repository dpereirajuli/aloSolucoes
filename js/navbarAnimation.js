document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Pega o valor do href (ex: #services)
        const targetElement = document.querySelector(targetId); // Seleciona o elemento de destino
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Rola suavemente
        }
    });
});