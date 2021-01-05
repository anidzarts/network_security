import { executeQuery } from "../database/database.js";

const getCardsList = async() => {
    const res = await executeQuery("SELECT * FROM cards");
    if (!res) {
        return [];
    }

    return res.rowsOfObjects();
}

const getCardsItem = async(id) => {
    const res = await executeQuery("SELECT * FROM cards WHERE id = $1", id);
    if (!res) {
        return {};
    }

    return res.rowsOfObjects()[0];
}


const deleteCardsItem = async(id) => {
    await executeQuery("DELETE FROM cards WHERE id = $1", id);
}

const addCardsItem = async(name, issue_token, valid_token, block_list) => {
    await executeQuery("INSERT INTO cards (name, issue_token, valid_token, block_list) VALUES ($1, $2, $3, $4)", name, issue_token, valid_token, block_list);
}


export { getCardsList, getCardsItem, deleteCardsItem, addCardsItem};
