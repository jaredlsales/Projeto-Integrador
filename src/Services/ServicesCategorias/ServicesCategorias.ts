import prismaClient from "../../Prisma/PrismaClient";

interface Categoria {
    categoria: string
}

interface VisualizarCategoria {
    id: string,
    categoria: string
}

interface ApagarCategoria {
    id: string
}

class ServicesCategoria {
    async servicesCategoria ({categoria}: Categoria) {
        await prismaClient.categorias.create({
            data: {
                categoria:categoria
            }
        })
            
        return ({dados:"Categoria Efetuado com sucesso"})


    }

    async visualizarCategoria (){
        const resposta =  await prismaClient.categorias.findMany({
            select:{
                id: true,
                categoria: true
            }
        })

        return resposta
        
    }

    async atualizarCategoria({id, categoria}: VisualizarCategoria){
        await prismaClient.categorias.update({
            where:{
                id:id
            },
            data:{
                categoria:categoria
            }
        })

        return ({dados:"Alteração feito com sucesso"})
        
    }

    async apagarCategoria({id}: ApagarCategoria){
        const  idNaoExiste = await prismaClient.categorias.findFirst({
            where:{
                id:id
            }
        })

        if(!idNaoExiste){
            throw new Error ("Registro não encontrado")
        }

        await prismaClient.categorias.delete({
            where:{
                id:id
            }
        })

        return ({dados:"Registro apagado com sucesso"})
    }
}


export {ServicesCategoria}