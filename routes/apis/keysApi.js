import * as keysService from "../../services/keysServices.js";

const blockCard = async({request, response}) => {
    const body = request.body();
    const document = await body.value;
    const name = document.get('name');
    await keysService.readersCheckBlock(name);
    response.status = 200;
    return response.send(''); 
};

const keysAuth = async({params, response}) => {
    await keysService.getAuthKey(params.id);
    response.status = 200;
  };

const keysSign = async({params, response}) => {
    await keysService.getSigningKey(params.id);
    response.status = 200;
  };

  const cardsBlock = async({params, response}) => {
    await keysService.cardsCheckBlock(params.id);
    response.status = 200;
};

const readersBlock = async({params, response}) => {
    await keysService.readersCheckBlock(params.id);
    response.status = 200;
};

const changeBlock = async({params, response}) => {
    await keysService.changeItem(params.name);
    response.status = 200;
};

export { blockCard, keysAuth, keysSign, cardsBlock, readersBlock, changeBlock };