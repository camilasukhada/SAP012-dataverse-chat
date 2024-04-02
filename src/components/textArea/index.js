export const renderTextArea = (chatBanner) => {
    const chatInput = document.createElement('input');
    chatInput.setAttribute('type', 'text');
    chatInput.setAttribute('placeholder', 'Digite aqui...');
    chatInput.classList.add('inputChat'); 
    
    chatBanner.appendChild(chatInput); 
    
    return chatInput;
};