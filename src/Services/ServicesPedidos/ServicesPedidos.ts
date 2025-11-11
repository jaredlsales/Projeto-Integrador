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
}

export {ServicesPedidos}