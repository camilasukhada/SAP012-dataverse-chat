export const renderErrorRoute= () => {

    const errorRoute = document.createElement('p');
    errorRoute.textContent = "Essa página não existe, verifique se o endereço foi digitado corretamente.";
    errorRoute.classList.add('errorRoute')
    return errorRoute
  }