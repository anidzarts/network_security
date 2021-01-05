import * as readersService from "../../services/readersServices.js";

const readersList = async({render}) => {
  render('index.ejs', { readers: await readersService.getReadersList() });
};
 
const readersItem = async({params, render}) => {
  render('readers-item.ejs', await readersService.getReadersItem(params.id));
};



export { readersList, readersItem};