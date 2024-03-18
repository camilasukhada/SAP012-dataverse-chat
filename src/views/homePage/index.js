//import { renderFooter } from './components/footer/index.js';
//import { renderHeader } from './components/header/index.js';

import { renderFilter } from '../../components/filters/index.js';
import { data } from '../../data/dataset.js';
import { filterData, sortData, computeStats } from '../../lib/dataFunctions.js';

/*export function homePage(props) {
  console.log("HOME");
    const viewEl = document.createElement('div');
      viewEl.innerHTML = `
      <h1>DataVerse</h1>
    `;
    return viewEl;
  }*/



const homePage = () => {
    const homeElement = document.createElement('div');
    //homeElement.innerHTML = data;
    homeElement.appendChild(renderFilter());
    return homeElement;
}



export { homePage };