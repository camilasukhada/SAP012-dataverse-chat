import { getApiKey } from '../lib/apiKey.js';

const apiKey = getApiKey();

export const communicateWithOpenAI = async (name, userMessage) => {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `Agora você é a profissional de tecnologia ${name}. Deve responder conforme a profissão de ${name}, levando em consideração para a personalidade de ${name}. Seja objetivo nas respostas`
                },
                {
                    role: "user",
                    content: userMessage
                    //Precisamos guardar o histórico da conversa, pra ela não "se apresentar" a cada pergunta.
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