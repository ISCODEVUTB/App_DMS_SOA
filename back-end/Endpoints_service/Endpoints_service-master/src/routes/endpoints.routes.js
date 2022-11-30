import {Router} from "express";
import {
    create_inventory,
    delete_inventory,
    inventario, inventario_id,
    update_inventory
} from "../controller/endpointsin.controller.js";
import {carrito, carrito_id, update_carrito} from "../controller/endpointsca.controller.js";
import {login, sigin} from "../controller/endpointsus.controller.js";
import {crearorden, feedback} from "../controller/endpointsmerca.controller.js";

const router = Router()

router.get('/inventario', inventario)
router.get('/inventario/:id',inventario_id)
router.post('/create_inventory',create_inventory)
router.post('/update_inventory',update_inventory)
router.post('/delete_inventory',delete_inventory)
router.get('/carrito', carrito)
router.get('/carrito/:id', carrito_id)
router.post('/update_carrito', update_carrito)
router.post('/login', login)
router.post('/sigin', sigin)
router.post('/crear-orden', crearorden)
router.get('/feedback', feedback)

export default router