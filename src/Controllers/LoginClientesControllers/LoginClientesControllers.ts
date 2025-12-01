import { Request, Response } from "express";
import {ServicesLoginClientes} from "../../Services/ServicesLoginClientes/ServicesLoginClientes"

class LoginClientesControllers {
    async loginClientesControllers(req:Request, res:Response){
        const {email, senha} = req.body
        const enviarDados = new ServicesLoginClientes()
        const resposta =  await enviarDados.servicesLoginClientes({
            email,
            senha
        })

        return res.json(resposta)
    }
}


export {LoginClientesControllers}