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
  <p id="status"></p>
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

  const btnEnviar = chatBox.querySelector("#sendMessageBtn");

  btnEnviar.addEventListener("click", async () => {
    const objetoEncontrado = encontrarObjetoPorId(idURL);

    if (objetoEncontrado) {
      const status = chatBox.querySelector('#status');
      status.innerHTML = `${objetoEncontrado.personaName} está digitando`;
      conversation.innerHTML += `<p id="styleQuestion">${inputMessage.value}</p>`;

      try {
        const resposta = await communicateWithOpenAI(objetoEncontrado, inputMessage.value);
        conversation.innerHTML += `<p id="styleAnswer">${resposta.choices[0].message.content}</p>`;

      } catch (error) {
        localStorage.setItem("type", "chat");
        window.location.href = '/error';
      }

      inputMessage.value = "";
      status.innerHTML = "";
    }
  });
  return chatBox;
};