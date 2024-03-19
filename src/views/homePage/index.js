//import { renderFooter } from './components/footer/index.js';
//import { renderHeader } from './components/header/index.js';
//import { renderCards } from '../../components/cards/index.js';
import { renderFilter } from '../../components/filters/index.js';
import { data } from '../../data/dataset.js';
import { filterData, sortData, computeStats } from '../../lib/dataFunctions.js';
//import { renderItems, renderStatsMessage } from '../../components/cards/index.js';

const homePage = () => {
    let cardData = [...data];

    const homeElement = document.createElement('div');
    homeElement.appendChild(renderFilter());

    const filtro = homeElement.querySelector("#filtro");

    filtro.addEventListener("change", (e) => {
        console.log(e.target.value);

        let value = e.target.value;
        const filterBy = value.split("|")[0];
        value = value.split("|")[1];

        if (value === "todos") {
            cardData = [...data];
        } else {
            cardData = filterData(data, filterBy, value);
        }

        // cardsItens.innerHTML = "";
        // cardsItens.appendChild(renderCards(cardData));
        //cardsItens.innerHTML = "";

        if (value !== "todos") {
            //const count = computeStats(data, filterBy, value);
            //const statsMessage = renderStatsMessage(count);
            // cardsItens.appendChild(statsMessage);
        }

        //cardsItens.appendChild(renderItems(cardData));
        console.log(cardData);
    });

    //homeElement.appendChild(renderCards());
    return homeElement;
}


/*const cardsItens = document.querySelector("#root");
const filtro = document.querySelector("#filtro");

let cardData = [...data];

filtro.addEventListener("change", (e) => {
  let value = e.target.value;
  const filterBy = value.split("|")[0];
  value = value.split("|")[1];
  if (value === "todos") {
    cardData = [...data];
  } else {
    cardData = filterData(data, filterBy, value);
  }
  cardsItens.innerHTML = "";

  cardsItens.appendChild(renderItems(cardData));

  cardsItens.innerHTML = "";

  if (value !== "todos") {
    const count = computeStats(data, filterBy, value);
    const statsMessage = renderStatsMessage(count);
    cardsItens.appendChild(statsMessage);
  }

  cardsItens.appendChild(renderItems(cardData));
});

const ordenacao = document.querySelector("#ordenacao");

ordenacao.addEventListener("change", (e) => {
  const orderValue = e.target.value;

  if (orderValue === "asc") {
    cardData = sortData(cardData, "mediaSalarialJr", "asc");
  }
  else if (orderValue === "desc") {
    cardData = sortData(cardData, "mediaSalarialJr", "desc");
  }

  cardsItens.innerHTML = "";
  cardsItens.appendChild(renderItems(cardData));
});

cardsItens.appendChild(renderItems(data));

const botaoLimpar = document.querySelector("#reset-button");
botaoLimpar.addEventListener("click", () => {
  cardData = [...data];
  cardsItens.innerHTML = "";
  filtro.value = "";
  ordenacao.value = "";
  cardsItens.appendChild(renderItems(data));
})*/


export { homePage };