import { setApiKey } from "../../lib/apiKey.js";

export const renderModal = () => {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="key-content">
        <div>
            <button class="btnKey">API Key</button>
        </div>
        <div>
            <dialog class="dialogKey">
                <p>Configure sua API Key</p>
                <input type="password" id="valueKey" placeholder="Digite aqui..">
                <button type="submit" class="btnSubmitKey">Gravar API</button>
                <button type="submit" class="btnCancelKey">Cancelar</button>
            </dialog>
        </div>
    </div>`;
   
  const btnKeyApi = modal.querySelector(".btnKey");
  const btnSubmitKey = modal.querySelector('.btnSubmitKey');
  const btnCancelKey = modal.querySelector('.btnCancelKey');
  const valueKey = modal.querySelector('#valueKey');
  const dialogKey = modal.querySelector('.dialogKey');

  btnKeyApi.addEventListener("click", () => {
    dialogKey.showModal();
  });

  btnSubmitKey.addEventListener("click", () => {
    setApiKey(valueKey.value);
    dialogKey.close();
  });

  btnCancelKey.addEventListener("click", () => {
    dialogKey.close();
  });

  return modal;
}