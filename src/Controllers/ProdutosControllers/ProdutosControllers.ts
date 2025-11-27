import {json, Request, Response} from "express"
import {ServicesProdutos} from "../../Services/ServicesProdutos/ServicesProdutos"

class ProdutosControllers {
    async produtosControllers (req:Request, res:Response) {
        const {nome_produto, descricao, valor, idCategoria} = req.body
        const enviarDados = new ServicesProdutos()
        const resposta = await enviarDados.servicesProdutos({
            nome_produto,
            descricao,
            valor,
            idCategoria
        })

        return res.json(resposta)
    }

    async visualizarProdutos (req:Request, res:Response){
        const enviarDados = new ServicesProdutos()
        const resposta = await enviarDados.visualizarProdutos()
        return res.json(resposta)
    }

    async atualizarProdutos (req:Request, res:Response){
        const {id, nome_produto,descricao,valor} = req.body
        const enviarDados = new ServicesProdutos()
        const resposta = await enviarDados.atualizarProdutos({
            id,
            nome_produto,
            descricao,
            valor
        })

        return res.json(resposta)
    }
    
}

export {ProdutosControllers}