function checkAuthentication() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const restrictedPages = ['mural.html', 'mensagem.html'];

    const currentPage = window.location.pathname.split('/').pop();
    if (restrictedPages.includes(currentPage) && !loggedInUser) {
        alert('Voce precisa estar logado para acessar esta pagina.');
        window.location.href = 'login.html';
    }
}

function initApp() {
    checkAuthentication();

    if (window.location.pathname.includes('mural.html')) {
        loadMessages();
    }

    if (window.location.pathname.includes('mensagem.html')) {
        const messageIndex = new URLSearchParams(window.location.search).get('index');
        viewMessage(messageIndex);
    }
}

window.addEventListener('load', initApp);
