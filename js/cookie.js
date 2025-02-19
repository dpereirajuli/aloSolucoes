document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptAllButton = document.getElementById('accept-all');
    const declineAllButton = document.getElementById('decline-all');

    acceptAllButton.addEventListener('click', function () {
        // Aqui você pode adicionar a lógica para aceitar todos os cookies
        cookieConsent.style.display = 'none';
        console.log('Todos os cookies foram aceitos.');
    });

    declineAllButton.addEventListener('click', function () {
        // Aqui você pode adicionar a lógica para recusar todos os cookies
        cookieConsent.style.display = 'none';
        console.log('Todos os cookies foram recusados.');
    });
});