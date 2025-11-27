import prismaClient from "../../Prisma/PrismaClient";

interface Categoria {
    categoria: string
}

interface VisualizarCategoria {
    id: string,
    categoria: string
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
}


export {ServicesCategoria}