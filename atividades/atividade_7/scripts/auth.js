function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Usuario cadastrado com sucesso!');
    window.location.href = 'login.html';
}

function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'mural.html';
    } else {
        alert('Usuario ou senha incorretos.');
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}

document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    registerUser(username, password);
});

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginUser(username, password);
});
