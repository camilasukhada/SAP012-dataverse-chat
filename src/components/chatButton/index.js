export const renderChatButton = (chatArea) => {
    const chatButton = document.createElement('button');
    chatButton.textContent = 'Enviar'; // Define o texto do botão como "Enviar"
    chatButton.classList.add('chatButton');

    chatButton.addEventListener("click", () => {
        // Obtém a mensagem digitada pelo usuário
        const messageInput = document.querySelector('.inputChat');
        const message = messageInput.value;

        // Verifica se a mensagem não está vazia
        if (message.trim() !== '') {
            // Cria um elemento para exibir a mensagem
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;

            // Adiciona a mensagem à área do chat
            chatArea.appendChild(messageElement);

            // Limpa o campo de entrada
            messageInput.value = '';
        }
    });

    return chatButton;
};