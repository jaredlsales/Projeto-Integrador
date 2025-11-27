import {Request, Response} from "express"
import {ServicesController} from "../../Services/ServicesCategorias/ServicesCategorias"

class CategoriasControllers {
    async categoriasControllers (req: Request, res:Response) {
        const {categoria} = req.body
        const enviarDados = new ServicesController()
        const resposta = await enviarDados.servicesController({
            categoria
        })

        return res.json(resposta)
    }

    async visualizarCategorias(req:Request, res:Response){
        const enviarDados =  new ServicesController()
        const resposta =  await enviarDados.visualizarPagamento()
        return res.json(resposta)
    }
}


export {CategoriasControllers}