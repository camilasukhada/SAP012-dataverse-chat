let ROUTES = {};
let rootEl;

const setRootEl = (el) => {
    rootEl = el
}

function setRoutes(routes) {
    ROUTES = routes
}

function renderView(view) {
    //limpar antes de renderizar
    rootEl.innerHTML = "";
    //appendChild apenas agrega/adiciona.
    rootEl.appendChild(ROUTES[view]())
}

function onURLChange(location) {
    renderView(location.pathname)
}

export { setRootEl, setRoutes, renderView, onURLChange };