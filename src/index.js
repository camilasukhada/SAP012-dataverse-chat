import { setRootEl, setRoutes, onURLChange } from "./router.js";

//import {setApiKey} from "../src/lib/apiKey.js"

import { renderFooter } from './components/footer/index.js';
import { renderHeader } from './components/header/index.js';

//import { renderModal } from './components/modal/index.js';

import { homePage } from "./views/homePage/index.js";
import { profile } from "./views/profile/index.js";
import { individualChat } from "./views/individualChat/index.js";
import { groupChat } from "./views/groupChat/index.js";
import { error } from "./views/error/index.js";

const routes = {
  "/": homePage,
  "/profile": profile,
  "/individualChat": individualChat,
  "/groupChat": groupChat,
  "/error": error
};

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("header");
  header.appendChild(renderHeader());

  const root = document.getElementById('root');
  root.appendChild(homePage());

  const footer = document.querySelector("footer");
  footer.appendChild(renderFooter());


  const btnKeyApi = document.querySelector(".btnKey");
  const btnSubmitKey = document.querySelector('.btnSubmitKey');
  const btnCancelKey =document.querySelector ('.btnCancelKey');
  const valueKey = document.querySelector('#valueKey');
  const dialogKey = document.querySelector('.dialogKey');

  btnKeyApi.addEventListener("click", () => {
    dialogKey.showModal();
  });

  btnSubmitKey.addEventListener("click", () => {
    setApiKey(valueKey.value)
    dialogKey.close();
  });

  btnCancelKey.addEventListener("click", () => {
    dialogKey.close();
  });

  setRootEl(root);

  setRoutes(routes);

  onURLChange(window.location);
});