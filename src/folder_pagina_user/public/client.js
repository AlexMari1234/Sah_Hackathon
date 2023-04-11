document.addEventListener('DOMContentLoaded', () => {
  const socket = io();
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const messages = document.getElementById('messages');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("mesaj:" + input.value);
    if (input.value != "") {
      socket.emit('chat message', input.value);
      
      input.value = '';
    }
  });

  socket.on('chat message', (msg) => {
    const item = document.createElement("li");
    item.textContent = msg;
    // item.textContent = "ma pis sange";
    messages.appendChild(item);
    console.log("mesaj de la back item:" + item.textContent);
    window.scrollTo(0, document.body.scrollHeight);
  });
});
