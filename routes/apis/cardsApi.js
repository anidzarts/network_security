import * as cardsService from "../../services/cardsServices.js";


const deleteCardsItem = async({params, response}) => {
    await cardsService.deleteCardsItem(params.id);
    response.status = 200;
    return response.redirect('/cards'); 
};

const addCardsItem = async({request, response}) => {
    const body = request.body();
    const document = await body.value;
    const name = document.get('name');
    const issue_token = document.get('issue_token');
    const valid_token = document.get('valid_token');
    const block_list = document.get('block_list')
    await cardsService.addCardsItem(name, issue_token, valid_token, block_list );
    response.status = 200;
    return response.redirect('/cards'); 
};

export { deleteCardsItem, addCardsItem};
