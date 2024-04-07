import { setRootEl, setRoutes, onURLChange } from "./router.js";

//import {setApiKey} from "../src/lib/apiKey.js"

import { renderFooter } from './components/footer/index.js';
import { renderHeader } from './components/header/index.js';
import { renderButtons } from './components/buttons/index.js';
import { renderModal } from './components/modal/index.js';
import { homePage } from "./views/homePage/index.js";
import { individualChat } from "./views/individualChat/index.js";
import { error } from "./views/Error/index.js";

const routes = {
  "/": homePage,
  "/individualChat": individualChat,
  "/error": error
};

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("header");
  header.appendChild(renderHeader());

  const root = document.getElementById('root');
  root.appendChild(homePage());
  

  const footer = document.querySelector("footer");
  footer.appendChild(renderFooter());

  const modal = document.querySelector(".key-content");
  modal.appendChild(renderModal());

  const btnHome= document.querySelector(".btnHome");
  btnHome.appendChild(renderButtons());

  setRootEl(root);

  setRoutes(routes);

  onURLChange(window.location);
});