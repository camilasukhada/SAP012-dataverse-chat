import { renderChatBanner } from "../../components/chatBanner/index.js";
import { renderTextArea } from "../../components/textArea/index.js";
import { renderChatButton } from "../../components/chatButton/index.js"; 
import { data } from '../../data/dataset.js';

const individualChat = () => {
  // Renderiza o banner
  const chatBanner = renderChatBanner(data);

  // Passa chatBanner como argumento para renderTextArea
  const textArea = renderTextArea(chatBanner);

  // Renderiza o botão de chat
  const chatButton = renderChatButton();

  // Adiciona o botão de chat ao chatBanner
  chatBanner.appendChild(chatButton);

  // Cria uma área para exibir as mensagens do chat
  const chatArea = document.createElement('div');
  chatArea.classList.add('chat-area');
  chatBanner.appendChild(chatArea);

  // Adiciona um evento de clique ao botão de chat
  chatButton.addEventListener("click", () => {
    // Obtém a mensagem digitada pelo usuário
    const messageInput = textArea.querySelector('input[type="text"]');
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

  // Retorna o chatBanner com a área de texto e o botão de chat
  return chatBanner;
}

export { individualChat };