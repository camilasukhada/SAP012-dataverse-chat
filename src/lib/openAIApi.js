import { getApiKey } from '../lib/apiKey.js';

const apiKey = getApiKey();
const messages = [];

export const communicateWithOpenAI = async (user, userMessage) => {

  messages.push(
    {
      role: "system",
      content: `Agora você é a profissional de tecnologia ${user.personaName}. Deve responder conforme a profissão de ${user.name}, levando em consideração para a personalidade de ${user.persona}. Seja objetivo nas respostas`
    },
    {
      role: "user",
      content: userMessage
    }
  );
  const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [...messages]
    }),

    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    }
  });

  const respostaJson = await resposta.json();
  return respostaJson;
};