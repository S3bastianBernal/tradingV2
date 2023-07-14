import {Router}  from "express";

import { deleteTipos, getTipos,postTipos, putTipos } from "../controllers/tipoDineros.controller.js";

const router = Router();

router.get("/",getTipos);
router.post("/",postTipos);
router.delete("/:id",deleteTipos);
router.put("/:id",putTipos)

export default router;