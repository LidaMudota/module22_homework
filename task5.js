const ws = new WebSocket('wss://echo-ws-service.herokuapp.com/');
const chat = document.getElementById('chat');

ws.onmessage = function(event) {
    chat.innerHTML += `<p>Вы: ${event.data}</p>`;
};

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    ws.send(message);
    chat.innerHTML += `<p>Я: ${message}</p>`;
    messageInput.value = '';
}

function sendLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const link = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
        ws.send(`Гео-локация: ${link}`);
        chat.innerHTML += `<p>Гео-локация: <a href="${link}" target="_blank">${link}</a></p>`;
    });
}