const socket = io();

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const input = document.getElementById('text');
    const message = input.value.trim();
    socket.emit('message', message);
    const chatBox = document.getElementById('chat-box');
    const sentSpan = document.createElement('span');
    sentSpan.id = 'sent';
    sentSpan.innerText = message;
    chatBox.appendChild(sentSpan);
});

socket.on('message', (message) => {
    const chatBox = document.getElementById('chat-box');
    const receivedSpan = document.createElement('span');
    receivedSpan.id = 'received';
    receivedSpan.innerText = message;
    chatBox.appendChild(receivedSpan);
})