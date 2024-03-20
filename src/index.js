import { setRootEl, setRoutes, onURLChange } from "./router.js";

import { renderFooter } from './components/footer/index.js';
import { renderHeader } from './components/header/index.js';

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

  setRootEl(root);

  setRoutes(routes);

  onURLChange(window.location);
});