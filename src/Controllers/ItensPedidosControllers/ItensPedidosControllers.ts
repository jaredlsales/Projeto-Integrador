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

    async atualizarItensPedidos (req:Request, res:Response){
        const {id, quantidade, total_unitario} = req.body
        const enviarDados =  new ServicesItensPedidos()
        const resposta = await enviarDados.atualizarItensPedidos({
            id,
            quantidade,
            total_unitario
        })

        return res.json(resposta)
    }

    async apagarItensPedidos (req:Request, res:Response){
        const {id} = req.params
        const enviarDados =  new ServicesItensPedidos()
        const resposta =  await enviarDados.apagarItensPedidos({
            id
        })

        return res.json(resposta)
    }
}


export {ItensPedidosControllers}