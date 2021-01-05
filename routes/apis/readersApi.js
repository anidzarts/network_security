import * as readersService from "../../services/readersServices.js";


const deleteReadersItem = async({params, response}) => {
    await readersService.deleteReadersItem(params.id);
    response.status = 200;
    return response.redirect('/'); 
};

const addReadersItem = async({request, response}) => {
    const body = request.body();
    const document = await body.value;
    const name = document.get('name');
    const hash_token = document.get('hash_token');
    const block_list = document.get('block_list')
    await readersService.addReadersItem(name, hash_token, block_list );
    response.status = 200;
    return response.redirect('/'); 
};

export { deleteReadersItem, addReadersItem};