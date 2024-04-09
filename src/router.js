let ROUTES = {};
let rootEl;

const setRootEl = (el) => {
  rootEl = el
}

function setRoutes(routes) {
  ROUTES = routes
}

function renderView(view, props) {
  rootEl.innerHTML = "";
  
  const pagina =  ROUTES[view];
  if (pagina===undefined ){
    localStorage.setItem("type", "NotFound");
    rootEl.appendChild(ROUTES["/error"](props));
  } else{
    rootEl.appendChild(ROUTES[view](props))}
}

function navigateTo(pathname, props) {
  window.history.pushState; 
  renderView(pathname, props)
}

function onURLChange(location) {
  navigateTo(location.pathname)
}

window.addEventListener("popstate", onURLChange);

export { setRootEl, setRoutes, renderView, navigateTo, onURLChange };