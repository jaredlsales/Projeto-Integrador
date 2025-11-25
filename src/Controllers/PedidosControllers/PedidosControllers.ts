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

}

export {PedidosControllers}