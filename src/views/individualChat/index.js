import { renderChatBanner } from "../../components/chatBanner/index.js";
import { data } from '../../data/dataset.js';

const individualChat = () => {
  // const indChatElement = document.createElement('div');
  // indChatElement.innerHTML = "Chat individual";
  //renderChatBanner(data);
  
  return renderChatBanner(data);
}


export { individualChat };