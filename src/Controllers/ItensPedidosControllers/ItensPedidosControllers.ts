import {Request, Response} from "express"
import {ServicesItensPedidos} from "../../Services/ServicesItensPedidos/ServicesItensPedidos"

class ItensPedidosControllers {
    async itensPedidosControllers(req:Request, res:Response){
        const {quantidade, total_unitario, idPedido, idProduto} = req.body
        const enviarDados = new ServicesItensPedidos()
        const resposta = await enviarDados.servicesItensPedidos({
            quantidade,
            total_unitario,
            idPedido,
            idProduto
        })

        return res.json(resposta)
    }

    async visualizarItensPedidos (req:Request, res:Response){
        const enviarDados = new ServicesItensPedidos()
        const resposta = await enviarDados.visualizarItensPedidos()
        return res.json(resposta)
    }
}


export {ItensPedidosControllers}