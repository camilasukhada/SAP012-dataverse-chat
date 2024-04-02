import { renderChatBanner } from "../../components/chatBanner/index.js";
import { renderChatBox } from "../../components/chatBox/index.js";
import { renderTextArea } from "../../components/textArea/index.js";
import { data } from '../../data/dataset.js';

const individualChat = () => {  
   const bodyChat = document.createElement('div');
   bodyChat.appendChild(renderChatBanner(data));
   bodyChat.appendChild(renderChatBox());
   bodyChat.appendChild(renderTextArea());

  return bodyChat;
}


export { individualChat };