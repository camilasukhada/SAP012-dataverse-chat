import { communicateWithOpenAI } from '../../lib/openAIApi.js'
import { data } from '../../data/dataset.js'

export const renderChatBox = () => {
  const chatBox = document.createElement('div');
  chatBox.classList.add('chat-box');
  chatBox.innerHTML = `<div class="container">
  <div class="persona-list">
         <ul id="personaList"></ul>
  </div>
  <div class="persona-chat">
      <div id="conversation"> 
      
      </div>
      <div class="caixa_de_texto">
          <input type="text" id="message" placeholder="Pergunte aqui..">
          <button id="sendMessageBtn">Enviar</button>
      </div>
  </div>
</div>`;

  const inputMessage = chatBox.querySelector('#message');
  const conversation = chatBox.querySelector('#conversation');

  function encontrarObjetoPorId(idProcurado) {
    return data.find(objeto => objeto.id === idProcurado);
  }
  const params = new URLSearchParams(window.location.search);
  const idURL = params.get("id");

  const idDesejado = idURL;

  const btnEnviar = chatBox.querySelector("#sendMessageBtn");
  btnEnviar.addEventListener("click", async () => {

    const objetoEncontrado = encontrarObjetoPorId(idDesejado);

    if (objetoEncontrado) {

      conversation.innerHTML += `<p style="text-align:right"> ${inputMessage.value} </p>`;
      const resposta = await communicateWithOpenAI(objetoEncontrado, inputMessage.value);
      conversation.innerHTML += `<p> ${resposta.choices[0].message.content} </p>`;
    }
  });

  /*const startConversation = async (id) => {
        idPersonaName = id;

        const sendMessage = async () => {
            const messageInput = el.querySelector('#message');
            const message = messageInput.value.trim();
            if (message) {
                const conversationArea = el.querySelector('#conversation');
                const userMessage = document.createElement('p');
                userMessage.classList.add('user-answer');
                userMessage.textContent = `${message}`;
                conversationArea.appendChild(userMessage);
                messageInput.value = '';

                try {
                    const response = await communicateWithOpenAI(idPersonaName, message); // 
                    console.log("Resposta da API do OpenAI:", response); // Log da resposta completa da API
                    if (response && response.choices && response.choices.length > 0) {
                        const botMessageText = response.choices[0].message.content;
                        if (botMessageText) {
                            const botMessage = document.createElement('p');
                            botMessage.textContent = `${botMessageText.trim()}`;
                            botMessage.classList.add('persona-answer');
                            conversationArea.appendChild(botMessage);
                            conversationArea.scrollTop = conversationArea.scrollHeight; // Rolando para o final da conversa
                            console.log("Mensagem do bot adicionada à área de conversa:", botMessage);
                        } else {
                            console.error("A mensagem do bot está vazia ou indefinida.");
                        }
                    } else {
                        console.error("Resposta da API do OpenAI em um formato inesperado:", response);
                    }
                } catch (error) {
                    console.error("Erro ao comunicar com a API do OpenAI:", error);
                }
            }
        };

        const messageInput = el.querySelector('#message');
        const sendMessageBtn = el.querySelector('#sendMessageBtn');

        // Adicione o event listener para a tecla Enter
        messageInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });

        // Desabilitar o campo de entrada de texto e o botão de envio de mensagens inicialmente
        messageInput.disabled = true;
        sendMessageBtn.disabled = true;

        // Adicionar evento de clique no botão de envio de mensagem
        sendMessageBtn.addEventListener('click', sendMessage);

        rootElements.insertAdjacentElement("beforebegin", header());
        rootElements.insertAdjacentElement("afterend", footer());
        rootElements.insertAdjacentElement("afterend", el);

        return el;
    };*/

  return chatBox
};