import prismaClient from "../../Prisma/PrismaClient";
import {hash} from "bcryptjs"

interface Clientes {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    data_nascimento: Date
}

interface AtualizarClientes {
    id: string,
    nome: string,
    email: string,
    telefone: string,
    data_nascimento: Date
}

interface ApagarClientes {
    id: string
}

class ServicesClientes {
    async servicesClientes ({nome,email,senha,telefone,data_nascimento}: Clientes ) {
        const emailExiste =  await prismaClient.clientes.findFirst({
            where:{
                OR:[
                    {
                        email:email
                    }
                ]
            }
        })


        if(emailExiste){
            throw new Error("Email já está cadastrado")
        }

        const senhaCrypt = await hash(senha, 10)

        await prismaClient.clientes.create({
            data: {
                nome:nome,
                email:email,
                senha:senhaCrypt,
                telefone:telefone,
                data_nascimento:data_nascimento
            }
        })

        return ({dados: "Cadastro Efetuado com sucesso"})
    }

    async visualizarCLientes(){
        const resposta = await prismaClient.clientes.findMany({
            select:{
                id: true,
                nome: true,
                email: true,
                telefone: true,
                data_nascimento: true
            }
        })

        return resposta
        
    }

    async atualizarClientes({id, nome, email, telefone, data_nascimento}: AtualizarClientes){
        await prismaClient.clientes.update({
            where:{
                id:id
            },
            data:{
                nome:nome,
                email:email,
                telefone:telefone,
                data_nascimento:data_nascimento
            }
        })

        return ({dados:"Alteração feita com sucesso"})
    }

    async apagarClientes({id}: ApagarClientes){
        const idNaoExiste = await prismaClient.clientes.findFirst({
            where:{
                id:id
            }
        })

        if(!idNaoExiste){
            throw new Error("Registro não encontrado")
        }

        await prismaClient.pedidos.deleteMany({
        where:{
                idCliente:id
            }
        })

        await prismaClient.clientes.delete({
            where:{
                id:id
            }
        })



        return ({dados:"Registro Excluido com sucesso"})
    }


}


export {ServicesClientes}