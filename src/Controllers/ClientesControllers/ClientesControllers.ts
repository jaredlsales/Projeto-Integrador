import { Request, Response } from "express"
import {ServicesClientes} from "../../Services/ServicesClientes/ServicesClientes"

class ClientesControllers {
    async clientesControllers (req: Request, res: Response) {
        const {nome, email, senha, telefone, data_nascimento} = req.body
        const enviarDados = new ServicesClientes()
        const resposta = await enviarDados.servicesClientes({
            nome,
            email,
            senha,
            telefone,
            data_nascimento
        })

        return res.json(resposta)
    }
}


export {ClientesControllers}