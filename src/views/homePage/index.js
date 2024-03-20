import { renderCards } from '../../components/cards/index.js';
import { renderFilter } from '../../components/filters/index.js';
import { data } from '../../data/dataset.js';
import { filterData, sortData, computeStats } from '../../lib/dataFunctions.js';
import { renderStatsMessage } from '../../components/cards/index.js';

const homePage = () => {
  let cardData = [...data];

  const filterBody = document.createElement('div');
  const cardBody = document.createElement('div');

  cardBody.appendChild(renderCards(cardData));

  filterBody.appendChild(renderFilter());

  const filtro = filterBody.querySelector("#filtro");

  filtro.addEventListener("change", (e) => {
    let value = e.target.value;
    const filterBy = value.split("|")[0];
    value = value.split("|")[1];

    if (value === "todos") {
      cardData = [...data];
    } else {
      cardData = filterData(data, filterBy, value);
    }

    cardBody.innerHTML = "";

    if (value !== "todos") {
      const count = computeStats(data, filterBy, value);
      const statsMessage = renderStatsMessage(count);
      cardBody.appendChild(statsMessage);
    }

    cardBody.appendChild(renderCards(cardData));

  });

  filterBody.appendChild(cardBody);

  const ordenacao = filterBody.querySelector("#ordenacao");

  ordenacao.addEventListener("change", (e) => {
    const orderValue = e.target.value;

    if (orderValue === "asc") {
      cardData = sortData(cardData, "salario", "asc");
    }
    else if (orderValue === "desc") {
      cardData = sortData(cardData, "salario", "desc");
    }

    cardBody.innerHTML = "";
    cardBody.appendChild(renderCards(cardData));
  });

  const botaoLimpar = filterBody.querySelector("#reset-button");

  botaoLimpar.addEventListener("click", () => {
    cardData = [...data];
    filtro.value = "todos|todos";
    ordenacao.value = "default";
    cardBody.innerHTML = "";
    cardBody.appendChild(renderCards(cardData));
  });

  return filterBody;
}

export { homePage };