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

interface ApagarPedidos {
    id: string
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

    async apagarPedidos ({id}: ApagarPedidos){
        //Somente apagando os ItensPedidos e Pagamentos que sao "filhos" que vai conseguir apagar os pedidos.
        //O erro no Insomnia aconteceu porque o banco não deixava você apagar um Pedido que ainda tinha ItensPedidos e Pagamentos vinculados. Isso é esperado em bancos relacionais: primeiro você precisa remover os filhos, depois o pai.
        //Apagar todos os itens vinculados ao pedido (registros filhos -dependentes-) 
        await prismaClient.itensPedidos.deleteMany({
            where:{
                idPedido:id
            }
        })
        //Apagar todos os itens vinculados ao pedido (registros filhos -dependentes-) 
        await prismaClient.pagamento.deleteMany({
            where:{
                idPedido:id
            }
        })
        //Agora apaga o pedido
        await prismaClient.pedidos.delete({
            where:{
                id:id
            }
        })

        return ({dados:"Registro Apagado com Sucesso"})
    }
}

export {ServicesPedidos}