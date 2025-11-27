import { Router } from "express"
import {ClientesControllers} from "./Controllers/ClientesControllers/ClientesControllers"
import { PedidosControllers } from "./Controllers/PedidosControllers/PedidosControllers"
import {CategoriasControllers} from "./Controllers/CategoriasControllers/CategoriasControllers"
import {ProdutosControllers} from "./Controllers/ProdutosControllers/ProdutosControllers"
import {ItensPedidosControllers} from "./Controllers/ItensPedidosControllers/ItensPedidosControllers"
import {PagamentoControllers} from "./Controllers/PagamentoControllers/PagamentoControllers"

const router = Router()

//EndPoint - Metodo POST
router.post("/ClientesControllers", new ClientesControllers().clientesControllers)
router.post("/PedidosControllers", new PedidosControllers().pedidosControllers)
router.post("/CategoriasControllers", new CategoriasControllers().categoriasControllers)
router.post("/ProdutosControllers", new ProdutosControllers().produtosControllers)
router.post("/ItensPedidosControllers", new ItensPedidosControllers().itensPedidosControllers)
router.post("/PagamentoControllers", new PagamentoControllers().pagamentoControllers)

//EndPoint - Metodo GET
router.get("/VisualizarClientes", new ClientesControllers().visualizarClientes)
router.get("/VisualizarProdutos", new ProdutosControllers().visualizarProdutos)
router.get("/VisualizarPedidos", new PedidosControllers().visualizarPedidos)
router.get("/VisualizarItensPedidos", new ItensPedidosControllers().visualizarItensPedidos)
router.get("/VisualizarPagamento", new PagamentoControllers().visualizarPagamento)
router.get("/VisualizarCategoria", new CategoriasControllers().visualizarCategorias)

//EndPoint - Metodo PUT (Update)
router.put("/AtualizarCLientes", new ClientesControllers().atualizarClientes)
router.put("/AtualizarPedidos", new PedidosControllers().atualizarPedidos)
router.put("/AtualizarCategorias", new CategoriasControllers().atualizarCategorias)
router.put("/AtualizarProdutos", new ProdutosControllers().atualizarProdutos)
router.put("/AtualizarItensPedidos", new ItensPedidosControllers().atualizarItensPedidos)
router.put("/AtualizarPagamento", new PagamentoControllers().atualizarPagamento)

export default router

