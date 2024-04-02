export const renderChatBox = () => {

    const chatBox = document.createElement('div');
    chatBox.classList.add('chat-box');
    chatBox.innerHTML = `<p id="status"></p>
    <div id="history">
      <!-- Aqui vai o chat gerado conforme as respostas -->
    </div>`;
return chatBox
};