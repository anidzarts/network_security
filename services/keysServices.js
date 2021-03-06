import { executeQuery } from "../database/database.js";

const getAuthKey = async(id) => {
    //TODO check with id that the reader isnt blocked
    const isBlocked = await executeQuery("SELECT block_list FROM readers WHERE name = $1", id);
    if (isBlocked && isBlocked.rowCount >0 && !isBlocked.rowsOfObjects()[0].block_list) 
    
    {

        const res = await executeQuery("SELECT authentication FROM keys");
        if (!res) {
            return [];
        }
        return res.rowsOfObjects()[0];
    }
}

const getSigningKey = async(id) => {
    //TODO check with id that the reader isnt blocked
    const isBlocked = await executeQuery("SELECT block_list FROM readers WHERE name = $1", id);
    if (isBlocked && isBlocked.rowCount >0 && !isBlocked.rowsOfObjects()[0].block_list) 
    {
        const res = await executeQuery("SELECT signing FROM keys");
        if (!res) {
            return [];
        }
        return res.rowsOfObjects()[0];
    }
}


const getValidSigningKey = async(id) => {
    //TODO check with id that the reader isnt blocked
    const isBlocked = await executeQuery("SELECT block_list FROM readers WHERE name = $1", id);
    if (isBlocked && isBlocked.rowCount >0 && !isBlocked.rowsOfObjects()[0].block_list) 
    {

        const res = await executeQuery("SELECT valid_signing FROM keys");
        if (!res) {
            return [];
        }
        return res.rowsOfObjects()[0];
    }
}

const cardsCheckBlock = async(id) => {
    //TODO check with id that the reader isnt blocked
    const isBlocked = await executeQuery("SELECT block_list FROM cards WHERE name = $1", id);
    if (isBlocked && isBlocked.rowCount >0 && isBlocked.rowsOfObjects()[0].block_list) 
    {
        return ('true');
    }
}


const readersCheckBlock = async(id) => {
    //TODO check with id that the reader isnt blocked
    const isBlocked = await executeQuery("SELECT block_list FROM readers WHERE name = $1", id);
    if (isBlocked && isBlocked.rowCount >0 && isBlocked.rowsOfObjects()[0].block_list) 
    
    {
        return ('true');
    }
}


const changeItem = async(name) => {
    const res = await executeQuery("SELECT * FROM cards WHERE name = $1", name);
    if (res && res.rowCount>0) {
        console.log(res)
        console.log("HI")
        console.log(res.rowsOfObjects()[0])
        console.log(res.rowsOfObjects()[0]["id"])
        
        //TODO get id from res to UPDATE
        let id = res.rowsOfObjects()[0]["id"]
        console.log(id)
        await executeQuery("UPDATE cards SET block_list ='true' WHERE id = $1",
        id);
    }
    else {
        await executeQuery("INSERT INTO cards (name, block_list) VALUES ($1, 'true')", 
        name);
    }
}

export { getAuthKey, getSigningKey, changeItem, readersCheckBlock, cardsCheckBlock, getValidSigningKey};
