import prismaClient from "../../Prisma/PrismaClient";


interface Pedidos {
    numero_pedido: string,
    valor_total: number,
    idCliente: string
}

interface AtualizarPedidos {
    id: string,
    numero_pedido: string,
    valor_total: number,
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

    async atualizarPedidos({id, numero_pedido, valor_total}: AtualizarPedidos){
        await prismaClient.pedidos.update({
            where:{
                id:id
            },
            data:{
                numero_pedido:numero_pedido,
                valor_total:valor_total
            }
        })

        return ({dados:"Alteração feito com sucesso"})
       

    }
}

export {ServicesPedidos}