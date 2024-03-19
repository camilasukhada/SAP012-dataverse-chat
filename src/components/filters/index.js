
//import { renderHeader } from './components/header/index.js';

export const renderFilter = () => {

  const devs = document.createElement('p');
  devs.innerHTML = `<div class="comandos flex-center">
  <label for="filtro">Filtrar por:</label>
  <select id="filtro" data-testid="select-filter" name="tipo">
    <option value="todos|todos">Formação</option>
    <option value="formacao|Administração">Administração</option>
    <option value="formacao|Ciência da Computação">Ciência da Computação</option>
    <option value="formacao|Design de Interface">Design de Interface</option>
    <option value="formacao|Design de Jogos">Design de Jogos</option>
    <option value="formacao|Engenharia Elétrica">Engenharia Elétrica</option>
    <option value="formacao|Engenharia de Computação">Engenharia de Computação</option>
    <option value="formacao|Engenharia de Produção">Engenharia de Produção</option>
    <option value="formacao|Engenharia de Redes">Engenharia de Redes</option>
    <option value="formacao|Engenharia de Software">Engenharia de Software</option>
    <option value="formacao|Estatística">Estatística</option>
    <option value="formacao|Marketing">Marketing</option>
    <option value="formacao|Matemática">Matemática</option>
    <option value="formacao|Redes de Computadores">Redes de Computadores</option>
    <option value="formacao|Segurança da Informação">Segurança da Informação</option>
    <option value="formacao|Sistemas de Informação">Sistemas de Informação</option>
  </select>
  
  <label for="ordenacao">Ordenar por: </label>
  <select id="ordenacao" data-testid="select-sort" name="tipoDeOrdem">
    <option value="default">Média Salarial</option>
    <option value="asc">menor para o maior</option>
    <option value="desc">maior para o menor</option>
  </select>
  
  <button class="orderFilterReset font-size" id="reset-button" data-testid="button-clear">Limpar</button>
  </div>`;
  return devs
}


























/**/
