import * as keysService from "../../services/keysServices.js";

const blockCard = async({request, response}) => {
    const body = request.body();
    const params = await body.value;
    const name = params.get('name');
    await keysService.changeItem(name);
    response.status = 200;
    return response.body = ' '; 
};

const blockCardGet = async({params, response}) => {
  const name = params.id;
  await keysService.changeItem(name);
  response.status = 200;
  return response.body = 'blocked '+ name; 
};

const keysAuth = async({params, response}) => {
    const key = await keysService.getAuthKey(params.id);
    response.status = 200;
    return response.body = key.authentication;
  };


  const cardsBlock = async({params, response}) => {
    const key = await keysService.cardsCheckBlock(params.id);
    response.status = 200;
    return response.body = key;
    
};

const readersBlock = async({params, response}) => {
    const key = await keysService.readersCheckBlock(params.id);
    response.status = 200;
    return response.body = key;
};

const keysSign = async({params, response}) => {
    const key = await keysService.getSigningKey(params.id);
    response.status = 200;
    return response.body = key.signing;
  };

const keysValidSign = async({params, response}) => {
    const key = await keysService.getValidSigningKey(params.id);
    response.status = 200;
    return response.body = key.valid_signing;
  };


export { blockCard, keysAuth, keysSign, cardsBlock, readersBlock, keysValidSign, blockCardGet };
