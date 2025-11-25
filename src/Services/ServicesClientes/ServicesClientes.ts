import prismaClient from "../../Prisma/PrismaClient";

interface Clientes {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    data_nascimento: Date
}

class ServicesClientes {
    async servicesClientes ({nome,email,senha,telefone,data_nascimento}: Clientes ) {
        await prismaClient.clientes.create({
            data: {
                nome:nome,
                email:email,
                senha:senha,
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
}


export {ServicesClientes}