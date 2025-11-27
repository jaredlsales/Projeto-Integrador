import prismaClient from "../../Prisma/PrismaClient";

interface Pagamento {
    valor_pagamento: number,
    tipo_pagamento: string,
    idPedido: string
}

interface AtualizarPagamento {
    id: string,
    valor_pagamento: number,
    tipo_pagamento: string,
}

interface ApagarPagamento {
    id: string
}

class ServicesPagamentos {
    async servicesPagamento ({valor_pagamento,tipo_pagamento,idPedido}: Pagamento){
        await prismaClient.pagamento.create({
            data: {
                valor_pagamento:valor_pagamento,
                tipo_pagamento:tipo_pagamento,
                idPedido:idPedido
            }
        })

        return({dados:"Cadastro Efetuado com sucesso"})
    }

    async visualizarPagamento (){
        const resposta = await prismaClient.pagamento.findMany({
            select:{
                id: true,
                valor_pagamento: true,
                tipo_pagamento: true,
                data_pagamento: true
            }
        })

        return resposta
    }

    async atualizarPagamento({id, valor_pagamento, tipo_pagamento}: AtualizarPagamento){
        await prismaClient.pagamento.update({
            where:{
                id:id
            },
            data:{
                valor_pagamento:valor_pagamento,
                tipo_pagamento:tipo_pagamento
            }
        })

        return ({dados:"Alteração feita com sucesso"})
    }

    async apagarPagamento({id}: ApagarPagamento){
        await prismaClient.pagamento.delete({
            where:{
                id:id
            }
        })

        return ({dados:"Registro excluido com sucesso"})
    }



}

export {ServicesPagamentos}