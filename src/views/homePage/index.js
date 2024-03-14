//import { renderFooter } from './components/footer/index.js';
//import { renderHeader } from './components/header/index.js';

//import { data } from '../data/dataset.js';
//import { filterData, sortData, computeStats } from '../lib/dataFunctions.js';

/*export function homePage(props) {
    const viewEl = document.createElement('div');
      viewEl.innerHTML = `
      <h1>DataVerse</h1>
    `;
    return viewEl;
  }
*/


const homePage = () => {
    const homeElement = document.createElement('div');
    homeElement.innerHTML = "aqui será a página inicial";
    return homeElement;
}

export { homePage };