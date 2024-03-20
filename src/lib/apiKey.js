export const getApiKey = () => {
    // Implementa el código para obtener la API KEY desde Local Storage
    return localStorage.getItem("apiKeyChatGPT");
 };
 
 export const setApiKey = (key) => {
   // Implementa el código para guardar la API KEY en Local Storage
   localStorage.setItem("apiKeyChatGPT", key);
 };