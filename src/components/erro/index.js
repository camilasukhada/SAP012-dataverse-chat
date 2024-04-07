export const renderError = () => {
    const elementError = document.createElement('div');
    elementError.classList.add('div_Error');

    const image = document.createElement('img');
    image.src = "assets/erro/erro.jpg";
    image.alt = 'ícone de erro';
    image.classList.add('imgError');

    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Opps... Houve um erro!";
    errorMessage.classList.add('error_message');

    elementError.appendChild(image);
    elementError.appendChild(errorMessage);

    return elementError;
}