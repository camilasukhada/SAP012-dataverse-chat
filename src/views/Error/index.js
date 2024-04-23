import { renderError } from "../../components/erro/index.js";
import { renderErrorRoute } from "../../components/errorRoute/index.js";
import { renderErrorApi } from "../../components/errorApi/index.js";

//const errorType =


const error = () => {  
  const bodyError = document.createElement('div');
  bodyError.appendChild(renderError());  
  
  if (localStorage.getItem("type") === "chat") {
    bodyError.appendChild(renderErrorApi());
  } else if (localStorage.getItem("type") === "NotFound") {
    bodyError.appendChild(renderErrorRoute());
  }

  return bodyError;
}

export { error };
