
import { Router } from "../deps.js";
import * as readersController from "./controllers/readersController.js";
import * as readersApi from "./apis/readersApi.js";
import * as cardsController from "./controllers/cardsController.js";
import * as cardsApi from "./apis/cardsApi.js";
import * as keysApi from "./apis/keysApi.js";

const router = new Router();


router.get('/', readersController.readersList);
router.post('/reader', readersApi.addReadersItem);

router.get('/cards', cardsController.cardsList);
router.post('/cards', cardsApi.addCardsItem);

router.get('/readers/:id', readersController.readersItem);
router.get('/readers/delete/:id', readersApi.deleteReadersItem);

router.get('/cards/:id', cardsController.cardsItem);
router.get('/cards/delete/:id', cardsApi.deleteCardsItem);


router.get('/auth-key:id', keysApi.keysAuth);
router.get('/signing-key:id', keysApi.keysSign);
router.post('/block-list', keysApi.blockCard);
router.get('/cards/block:id', keysApi.cardsBlock);
router.get('/readers/block:id', keysApi.readersBlock);

router.get('/change/block:name', keysApi.changeBlock);

export { router };
