import { getApiKey } from '../lib/apiKey.js';

let idPersonaName = '';

const apiKey = getApiKey();

export const communicateWithOpenAI = async (idName, userMessage) => {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `Agora você é a profissional de tecnologia ${idPersonaName}. Deve responder conforme a profissão de ${idPersonaName}, levando em consideração para a personalidade de ${idPersonaName}. Seja objetivo nas respostas`
                },
                {
                    role: "user",
                    content: userMessage
                }
            ]
        }),
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    });

    const respostaJson = await resposta.json();
    console.log("Resposta da API do OpenAI:", respostaJson);
    return respostaJson;
};








/*export const communicateWithOpenAI = async (messages) => {
  const url = 'https://api.openai.com/v1/chat/completions';
  const apiKey = getApiKey(); // Supondo que getApiKey seja uma função válida que retorna a chave de API
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();

    if (data.choices && data.choices.length > 0 && data.choices[0].message) {
      return {
        success: true,
        content: data.choices[0].message.content,
      };
    } else {
      throw new Error('Nenhuma mensagem encontrada');
    }
  } catch (error) {
    throw new Error(error);
  }
};*/




/*Aqui você pode usar a função communicateWithOpenAI com as mensagens fornecidas nos modelos da documentação
const messages = [
  {
    role: "system",
    content: "You are a helpful assistant."
  },
  {
    role: "user",
    content: "Hello!"
  }
];
communicateWithOpenAI(messages)
  .then(response => {
    console.log("Resposta do modelo:", response.content);
  })
  .catch(error => {
    console.error("Erro ao se comunicar com a API da OpenAI:", error);
  });*/



































/*export const communicateWithOpenAI = (messages) => {
   console.log(messages);
   /*const url = 'https://api.openai.com/v1/chat/completions';

   const apiKey = getApiKey();

   const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
         model:

      })
};*/




















/*export const communicateWithOpenAI = (messages) => {
   const url = 'https://api.openai.com/v1/chat/completions';
   const api_key = getApiKey();
};*/



/*export function sendMessage() {
   const inputMessage = document.getElementById("message-input").value;
   alert(inputMessage);*/



   /*message.addEventListener("click", () => {
      {
      return;
   }*/