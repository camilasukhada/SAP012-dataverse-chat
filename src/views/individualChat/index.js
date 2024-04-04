import { communicateWithOpenAI } from '../../lib/openAIApi.js';
import { getApiKey } from '../../lib/apiKey.js';
import { renderChatBanner } from "../../components/chatBanner/index.js";
import { renderChatBox } from "../../components/chatBox/index.js";
import { data } from '../../data/dataset.js';

const individualChat = () => {
  const bodyChat = document.createElement('div');
  bodyChat.appendChild(renderChatBanner(data));

  const boxQuestion = document.createElement('div');
  boxQuestion.appendChild(renderChatBox());
  
  bodyChat.appendChild(boxQuestion);

  return bodyChat;
}

export { individualChat };