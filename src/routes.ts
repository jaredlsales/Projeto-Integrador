import { Router } from "express"
import {ClientesControllers} from "./Controllers/ClientesControllers/ClientesControllers"
import { PedidosControllers } from "./Controllers/PedidosControllers/PedidosControllers"

const router = Router()


router.post("/ClientesControllers", new ClientesControllers().clientesControllers)
router.post("/PedidosControllers", new PedidosControllers().pedidosControllers)

export default router

