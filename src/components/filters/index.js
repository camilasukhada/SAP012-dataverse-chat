export const renderFilter = () => {

  const filters = document.createElement('p');
  filters.innerHTML = `<div class="comandos flex-center">
  <label for="filtro">Filtrar por:</label>
  <select id="filtro" data-testid="select-filter" name="tipo">
    <option value="todos|todos">Formação</option>
    <option value="formacao|Administração">Administração</option>
    <option value="formacao|Ciência da Computação">Ciência da Computação</option>
    <option value="formacao|Design Gráfico">Design Gráfico</option>
    <option value="formacao|Engenharia de Computação">Engenharia de Computação</option>
    <option value="formacao|Engenharia de Software">Engenharia de Software</option>
    <option value="formacao|Sistemas de Informação">Sistemas de Informação</option>
  </select>
  
  <label for="ordenacao">Ordenar por: </label>
  <select id="ordenacao" data-testid="select-sort" name="tipoDeOrdem">
    <option value="default">Salário</option>
    <option value="asc">menor para o maior</option>
    <option value="desc">maior para o menor</option>
  </select>
  
  <button class="orderFilterReset font-size" id="reset-button" data-testid="button-clear">Limpar</button>
  </div>`;
  return filters
}


























/**/
