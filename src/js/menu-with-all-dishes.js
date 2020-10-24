import dishesCardsTemplates from '../templates/dishes';
import dishes from '../menu.json';

console.log(dishesCardsTemplates(dishes));
console.log(dishes);

const getMenuListEl = document.querySelector('.js-menu');
const cardsMarkup = dishesCardsTemplates(dishes);

getMenuListEl.insertAdjacentHTML('beforeend', cardsMarkup);
