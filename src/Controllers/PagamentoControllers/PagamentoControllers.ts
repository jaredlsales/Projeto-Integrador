import {Request, Response} from "express"
import {ServicesPagamentos} from "../../Services/ServicesPagamento/ServicesPagamento"

class PagamentoControllers {
    async pagamentoControllers (req:Request, res:Response){
        const {valor_pagamento, tipo_pagamento, idPedido} = req.body
        const enviarDados = new ServicesPagamentos()
        const resposta = await enviarDados.servicesPagamento({
            valor_pagamento,
            tipo_pagamento,
            idPedido
        })

        return res.json(resposta)
    }

    async visualizarPagamento(req:Request, res:Response){
        const enviarDados = new ServicesPagamentos()
        const resposta =  await enviarDados.visualizarPagamento()
        return res.json(resposta)
    }

    async atualizarPagamento(req:Request, res:Response){
        const {id, valor_pagamento, tipo_pagamento} = req.body
        const enviarDados =  new ServicesPagamentos()
        const resposta =  await enviarDados.atualizarPagamento({
            id,
            valor_pagamento,
            tipo_pagamento
        })

        return res.json(resposta)
    }
}


export {PagamentoControllers}