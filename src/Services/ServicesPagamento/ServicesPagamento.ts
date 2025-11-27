import prismaClient from "../../Prisma/PrismaClient";

interface Pagamento {
    valor_pagamento: number,
    tipo_pagamento: string,
    idPedido: string
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

}

export {ServicesPagamentos}