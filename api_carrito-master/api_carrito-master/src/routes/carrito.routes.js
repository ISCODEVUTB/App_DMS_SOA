import {Router} from "express";
import {getcarrito, getcarrito_ind, updatecarrito,} from "../controllers/carrito.controller.js";


const router = Router()

router.get('/carrito', getcarrito)
router.get('/carrito/:id', getcarrito_ind)
router.patch('/carrito', updatecarrito)

export default router
