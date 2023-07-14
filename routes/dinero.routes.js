import {Router}  from "express";

import { deleteDineros, getDineros,postDineros, putDineros } from "../controllers/dineros.controllers.js";

const router = Router();

router.get("/",getDineros);
router.post("/",postDineros);
router.delete("/:id",deleteDineros);
router.put("/:id",putDineros)

export default router;