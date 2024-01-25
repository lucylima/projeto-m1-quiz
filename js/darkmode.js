document.addEventListener('DOMContentLoaded', function () {
    // Verifica se há uma preferência salva no localStorage ao carregar a página
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    function ativarDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');

        // Salva a preferência no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    }

    window.ativarDarkMode = ativarDarkMode; // Torna a função acessível globalmente
});