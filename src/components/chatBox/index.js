import { communicateWithOpenAI } from '../../lib/openAIApi.js'

export const renderChatBox = () => {

  const chatBox = document.createElement('div');
  chatBox.classList.add('chat-box');
  chatBox.innerHTML = `<p id="status"></p>
    <div id="history">
      <!-- Aqui vai o chat gerado conforme as respostas -->
    </div>
    <div class="text">
    <input type="text" id="message-input" placeholder="Pergunte aqui...">
    <button class="btn-submit" id="btn-submit">Enviar</button>
  </div>`;


  const btnEnviar = chatBox.querySelector(".btn-submit");
  btnEnviar.addEventListener("click", () => {
    communicateWithOpenAI();
    

   });

  return chatBox
};