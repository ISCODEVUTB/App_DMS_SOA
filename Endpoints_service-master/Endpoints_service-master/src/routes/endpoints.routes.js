import {Router} from "express";
import {
    create_inventory,
    delete_inventory,
    inventario, inventario_id,
    update_inventory
} from "../controller/endpointsin.controller.js";
import {carrito, carrito_id, update_carrito} from "../controller/endpointsca.controller.js";
import {login, sigin} from "../controller/endpointsus.controller.js";

const router = Router()

router.get('/inventario', inventario)
router.get('/inventario/:id',inventario_id)
router.get('/create_inventory',create_inventory)
router.get('/update_inventory',update_inventory)
router.get('/delete_inventory',delete_inventory)
router.get('/carrito', carrito)
router.get('/carrito/:id', carrito_id)
router.get('/update_carrito', update_carrito)
router.get('/login', login)
router.get('/sigin', sigin)


export default router