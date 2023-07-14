import {Router}  from "express";

import { deleteAcciones, getAcciones,postAcciones, putAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get("/",getAcciones);
router.post("/",postAcciones);
router.delete("/:id",deleteAcciones);
router.put("/:id",putAcciones)

export default router;