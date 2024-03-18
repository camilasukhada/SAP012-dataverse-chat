import { renderCards } from '../../components/cards/index.js';

const homePage = () => {
     const homeElement = document.createElement('div');
     //homeElement.innerHTML = data;
    // homeElement.appendChild(renderFilter());
     homeElement.appendChild(renderCards());
     return homeElement;
 }

// const homePage = () => {
//      const homeElement = document.createElement('div');
//      homeElement.innerHTML = "aqui será a página inicial";
//      const mainElement = document.createElement('div');
//      mainElement.innerHTML = `
//      <div id="cards"></div>
//      `;
//      const rootElement = mainElement.querySelector('#cards');
//      rootElement.appendChild(renderCards());

     
//      const cardsItens = document.querySelector("#root");

//      let cardData = [...data];

//      cardsItens.appendChild(renderCards(data));

//      return homePage;
// }


// const renderCards = (data) => {
//    const itens = document.createElement('ul');
//    return itens;
//}

// const cardsItens = document.querySelector('ul');

// let cardData = [...data];
// cardsItens.appendChild(renderCards(data));

export { homePage };

// const footer = document.querySelector("footer");
// footer.appendChild(renderFooter());