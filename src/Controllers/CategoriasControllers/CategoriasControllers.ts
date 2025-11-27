import {Request, Response} from "express"
import {ServicesCategoria} from "../../Services/ServicesCategorias/ServicesCategorias"

class CategoriasControllers {
    async categoriasControllers (req: Request, res:Response) {
        const {categoria} = req.body
        const enviarDados = new ServicesCategoria()
        const resposta = await enviarDados.servicesCategoria({
            categoria
        })

        return res.json(resposta)
    }

    async visualizarCategorias(req:Request, res:Response){
        const enviarDados =  new ServicesCategoria()
        const resposta =  await enviarDados.visualizarCategoria()
        return res.json(resposta)
    }

    async atualizarCategorias(req:Request, res:Response){
        const {id,categoria} = req.body
        const enviarDados = new ServicesCategoria()
        const resposta = await enviarDados.atualizarCategoria({
            id,
            categoria
        })

        return res.json(resposta)
    }
}


export {CategoriasControllers}