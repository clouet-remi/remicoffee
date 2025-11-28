import { Router } from "express"; 
import { catalogPage, coffeeDetailPage, homePage, shopPage } from "../controllers/controller.js";
export const router = Router(); 

router.get("/", homePage); 
router.get("/catalog", catalogPage);
router.get("/coffee/:coffeeName", coffeeDetailPage)
router.get("/shop", shopPage)