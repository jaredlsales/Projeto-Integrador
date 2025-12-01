import prismaClient from "../../Prisma/PrismaClient";
import {compare} from "bcryptjs"

interface LoginClientes {
    email: string,
    senha: string
}

//Autenticação do Login (Senha e Email)
class ServicesLoginClientes {
    async servicesLoginClientes({email,senha}: LoginClientes){
        const emailExiste = await prismaClient.clientes.findFirst({
            where:{
                email:email
            }
        })

        if(!emailExiste){
            throw new Error("Login Incorreto")
        }

        const senhaCrypt = await compare(senha,emailExiste.senha)
       
        if(senhaCrypt){
            return ({dados:"Login Efetuado com Sucesso"})
        } else {
            throw new Error ("Login ou Senha Incorreta")
        }

    }
}


export {ServicesLoginClientes}