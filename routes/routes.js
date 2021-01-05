
import { Router } from "../deps.js";
import * as readersController from "./controllers/readersController.js";
import * as readersApi from "./apis/readersApi.js";
import * as cardsController from "./controllers/cardsController.js";
import * as cardsApi from "./apis/cardsApi.js";

const router = new Router();


router.get('/', readersController.readersList);
router.post('/reader', readersApi.addReadersItem);

router.get('/cards', cardsController.cardsList);
router.post('/cards', cardsApi.addCardsItem);

router.get('/readers/:id', readersController.readersItem);
router.get('/readers/delete/:id', readersApi.deleteReadersItem);

router.get('/cards/:id', cardsController.cardsItem);
router.get('/cards/delete/:id', cardsApi.deleteCardsItem);

export { router };