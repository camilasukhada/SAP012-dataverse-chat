import { renderError } from "../../components/erro/index.js";

const error = () => {
  const bodyError = document.createElement('div');
  bodyError.appendChild(renderError());
  return bodyError;
}

export { error };
