import prismaClient from "../../Prisma/PrismaClient";

interface ItensPedidos {
    quantidade: number,
    total_unitario: number,
    idPedido: string,
    idProduto: string
}

interface AtualizarItensPedidos {
    id: string,
    quantidade: number,
    total_unitario: number,
}

class ServicesItensPedidos {
    async servicesItensPedidos ({quantidade,total_unitario,idPedido,idProduto}: ItensPedidos){
        await prismaClient.itensPedidos.create({
            data:{
                quantidade:quantidade,
                total_unitario:total_unitario,
                idPedido:idPedido,
                idProduto:idProduto
            }
        })

        return({dados:"Cadastro Efetuado com sucesso"})
    }

    async visualizarItensPedidos(){
        const resposta = await prismaClient.itensPedidos.findMany({
            select:{
                id: true,
                quantidade: true,
                total_unitario: true,
                
            }
        })

        return resposta
    
    }

    async atualizarItensPedidos({id, quantidade, total_unitario}: AtualizarItensPedidos){
        await prismaClient.itensPedidos.update({
            where:{
                id:id
            },
            data:{
                quantidade:quantidade,
                total_unitario:total_unitario
            }
        })

        return ({dados:"Alteração feita com sucesso"})

    }

}

export {ServicesItensPedidos}