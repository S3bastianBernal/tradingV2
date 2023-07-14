import {Router}  from "express";

import { deleteTraders, getTraders,postTraders, putTraders } from "../controllers/traders.controller.js";

const router = Router();

router.get("/",getTraders);
router.post("/",postTraders);
router.delete("/:id",deleteTraders);
router.put("/:id",putTraders)

export default router;