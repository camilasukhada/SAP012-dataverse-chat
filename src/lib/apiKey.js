export const getApiKey = () => {
    return localStorage.getItem("apiKeyChatGPT");
 };
 
 export const setApiKey = (key) => {
   localStorage.setItem("apiKeyChatGPT", key);
 };