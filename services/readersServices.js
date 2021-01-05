import { executeQuery } from "../database/database.js";

const getReadersList = async() => {
    const res = await executeQuery("SELECT * FROM readers");
    if (!res) {
        return [];
    }

    return res.rowsOfObjects();
}

const getReadersItem = async(id) => {
    const res = await executeQuery("SELECT * FROM readers WHERE id = $1", id);
    if (!res) {
        return {};
    }

    return res.rowsOfObjects()[0];
}


const deleteReadersItem = async(id) => {
    await executeQuery("DELETE FROM readers WHERE id = $1", id);
}

const addReadersItem = async(name, hash_token, block_list) => {
    await executeQuery("INSERT INTO readers (name, hash_token, block_list) VALUES ($1, $2, $3)", name, hash_token, block_list);
}


export { getReadersList, getReadersItem, deleteReadersItem, addReadersItem};

