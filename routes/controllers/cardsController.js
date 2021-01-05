import * as cardsService from "../../services/cardsServices.js";

const cardsList = async({render}) => {
  render('cards.ejs', { cards: await cardsService.getCardsList() });
};
 
const cardsItem = async({params, render}) => {
  render('cards.ejs', await cardsService.getCardsItem(params.id));
};



export { cardsList, cardsItem};