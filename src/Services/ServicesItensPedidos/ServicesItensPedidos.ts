import prismaClient from "../../Prisma/PrismaClient";

interface ItensPedidos {
    quantidade: number,
    total_unitario: number,
    idPedido: string,
    idProduto: string
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

}

export {ServicesItensPedidos}