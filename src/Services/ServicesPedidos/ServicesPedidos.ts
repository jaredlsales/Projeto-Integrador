import prismaClient from "../../Prisma/PrismaClient";


interface Pedidos {
    numero_pedido: string,
    valor_total: number,
    idCliente: string
}



class ServicesPedidos {
    async servicesPedidos ({numero_pedido,valor_total,idCliente}: Pedidos ) {
        await prismaClient.pedidos.create({
            data: {
            numero_pedido:numero_pedido,
            valor_total:valor_total,
            idCliente:idCliente
            }
        })

        return ({dados:"Pedidos enviado com sucesso"})
    }

    async visualizarPedidos(){
       const resposta = await prismaClient.pedidos.findMany({
            select:{
                id: true,
                numero_pedido: true,
                valor_total: true,
                data_pedido: true
            }
       })

       return resposta
       
    }
}

export {ServicesPedidos}