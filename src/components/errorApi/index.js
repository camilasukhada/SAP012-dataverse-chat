export const renderErrorApi= () => {

  const errorApi = document.createElement('p');
  errorApi.textContent = "Falha na conexão com a Api. Verifique se a chave inserida está correta e tente novamente.";
  errorApi.classList.add('errorApi')
  return errorApi
}