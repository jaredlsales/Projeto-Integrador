import prismaClient from "../../Prisma/PrismaClient";

interface Produtos {
    nome_produto: string,
    descricao: string,
    valor: number,
    idCategoria: string
}

interface AtualizarProdutos {
    id: string,
    nome_produto: string,
    descricao: string,
    valor: number,
}

interface ApagarProdutos {
    id: string
}

class ServicesProdutos {
    async servicesProdutos ({nome_produto,descricao,valor,idCategoria}: Produtos) {
        await prismaClient.produtos.create({
            data: {
                nome_produto:nome_produto,
                descricao:descricao,
                valor:valor,
                idCategoria:idCategoria
            
            }
        })

        return({dados:"Produtos enviado com sucesso"})
    }

    async visualizarProdutos (){
        const resposta = await prismaClient.produtos.findMany({
            select:{
                id: true,
                nome_produto: true,
                descricao: true,
                valor: true
            }
        })

        return resposta
        
    }

    async atualizarProdutos({id, nome_produto, descricao, valor}: AtualizarProdutos){
        await prismaClient.produtos.update({
            where:{
                id:id
            },
            data:{
                nome_produto:nome_produto,
                descricao:descricao,
                valor:valor
            }
        })

        return ({dados:"Alteração feito com sucesso"})
    }

    async apagarProdutos ({id}: ApagarProdutos){
        await prismaClient.produtos.delete({
            where:{
                id:id
            }
        })

        return ({dados:"Registro excluido com sucesso"})

    }
}



export {ServicesProdutos}