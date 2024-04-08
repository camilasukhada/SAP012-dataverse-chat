import { getApiKey, setApiKey } from '../../SAP012-dataverse-chat/src/lib/apiKey.js';

describe('getApiKey', () => {

  it('deve retornar o valor da chave API', () => {
    const apiKey = 'apiKey';
    localStorage.setItem('apiKey', apiKey);
    expect(getApiKey()).toBe(apiKey);
  });

  it('deve retornar null se a API Key não estiver definida', () => {
    localStorage.removeItem('apiKey');
    expect(getApiKey()).toBeNull();
  });
});

describe('setApiKey', () => {

  it('deve definir a API Key corretamente', () => {
    const apiKey = 'testandoNovaKey';
    setApiKey(apiKey);
    expect(localStorage.getItem('apiKey')).toBe(apiKey);
  });
});