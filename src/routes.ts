import { Router } from "express"
import {ClientesControllers} from "./Controllers/ClientesControllers/ClientesControllers"
import { PedidosControllers } from "./Controllers/PedidosControllers/PedidosControllers"
import {CategoriasControllers} from "./Controllers/CategoriasControllers/CatetegoriasControllers"
import {ProdutosControllers} from "./Controllers/ProdutosControllers/ProdutosControllers"

const router = Router()

//EndPoint 
router.post("/ClientesControllers", new ClientesControllers().clientesControllers)
router.post("/PedidosControllers", new PedidosControllers().pedidosControllers)
router.post("/CategoriasControllers", new CategoriasControllers().categoriasControllers)
router.post("/ProdutosControllers", new ProdutosControllers().produtosControllers)

export default router

