import { getApiKey } from "../../lib/apiKey.js";

export const renderCards = (data) => {
  const itens = document.createElement('ul');
  itens.classList.add('container_itens');

  data.forEach((item) => {
    itens.innerHTML += `
   <li itemscope itemtype="mulheresTech" class="container_itens" >
      <dl itemscope itemtype="mulheresTech"> 
        <dt class="font-size"></dt><dd itemprop="imageUrl" class="justify-align font-size"><img class="justify-align" src="${item.imageUrl}" itemprop="${item.imageUrl}" alt="Profissional mulher da área da tecnologia." /> </dd>
        <dt class="font-size"></dt><dd itemprop="personaName" class="justify-align font-size">${item.personaName}</dd>
        <dt class="font-size"></dt><dd itemprop="name" class="justify-align font-size">${item.name}</dd>
        <dt class="font-size"></dt><dd itemprop="persona"class="justify-align font-size">"${item.persona}"</dd>
        <dt class="font-size">Formação:</dt><dd itemprop="formacao" class="font-size">${item.facts.formacao}.</dd>
        <dt class="font-size">Salário:</dt><dd itemprop="salario" class="font-size">R$ ${item.facts.salario}.</dd>
        <button id=${item.id} class="iniciarChat flex-center">INICIAR CHAT!</button>      
      </dl>
    </div>
   `;
  })

  itens.className = "flex-center";

  itens.querySelectorAll('.iniciarChat').forEach(button => {
    button.addEventListener('click', () => {
      if (getApiKey() !== "" && getApiKey() !== null) {
        window.location.href = `/individualChat?id=${button.id}`;
      }
      else {
        alert("Favor preencher a API KEY encontrada no topo da página");
      }

    });
  });

  return itens;
};

export const renderStatsMessage = (count) => {
  const statsMessage = document.createElement('div');
  statsMessage.textContent = `Exibindo ${count} carreira(s) relacionada(s) a essa formação:`;
  statsMessage.className = "estatistica";
  return statsMessage;
};