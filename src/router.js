let ROUTES = {};
let rootEl;

const setRootEl = (el) => {
  rootEl = el
}

function setRoutes(routes) {
  ROUTES = routes
}

function renderView(view) {
  rootEl.innerHTML = "";
  rootEl.appendChild(ROUTES[view]())
}

function navigateTo(pathname) {
  window.history.pushState; //ver documentacao e continuar a implementa da function
  renderView(pathname)
}

//function queryStringto() {} 

function onURLChange(location) {
  navigateTo(location.pathname)
}

export { setRootEl, setRoutes, renderView, onURLChange };