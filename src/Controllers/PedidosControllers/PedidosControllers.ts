import {Request, Response } from "express"
import {ServicesPedidos} from "../../Services/ServicesPedidos/ServicesPedidos"


class PedidosControllers {
    async pedidosControllers (req:Request, res:Response) {
        const {numero_pedido, valor_total, idCliente } = req.body 
        const enviarDados = new ServicesPedidos()
        const respota = await enviarDados.servicesPedidos({
            numero_pedido,
            valor_total,
            idCliente
        })

        return res.json(respota)
    }


    async visualizarPedidos (req:Request, res:Response){
        const enviarDados = new ServicesPedidos()
        const reposta = await enviarDados.visualizarPedidos()
        return res.json(reposta)
    }

    async atualizarPedidos (req:Request, res:Response){
        const {id, numero_pedido, valor_total} = req.body
        const enviarDados = new ServicesPedidos()
        const resposta =  await enviarDados.atualizarPedidos({
            id,
            numero_pedido,
            valor_total
        })

        return res.json(resposta)
    }

    async apagarPedidos (req:Request, res:Response){
        const {id} = req.params
        const enviarDados = new ServicesPedidos()
        const resposta =  await enviarDados.apagarPedidos({
            id
        })

        return res.json(resposta)
    }

}

export {PedidosControllers}