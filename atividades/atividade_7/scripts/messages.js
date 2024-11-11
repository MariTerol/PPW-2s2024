function addMessage(content) {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    const username = localStorage.getItem('loggedInUser');
    if (!username) return alert('É necessário fazer login.');
    messages.push({ username, content });
    localStorage.setItem('messages', JSON.stringify(messages));
    loadMessages();
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    const messagesList = document.getElementById('messagesList');
    if (messagesList) {
        messagesList.innerHTML = messages.map((msg, index) => 
            `<div onclick="viewMessage(${index})">${msg.username}: ${msg.content}</div>`
        ).join('');
    }
}

function viewMessage(index) {
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    const messageDetail = document.getElementById('messageDetail');
    if (messageDetail) {
        const msg = messages[index];
        messageDetail.innerHTML = `<h2>${msg.username}</h2><p>${msg.content}</p>`;
    }
}

document.getElementById('messageForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = document.getElementById('messageContent').value;
    addMessage(content);
});
