import prismaClient from "../../Prisma/PrismaClient";

interface Produtos {
    nome_produto: string,
    descricao: string,
    valor: number,
    idCategoria: string
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
}



export {ServicesProdutos}