import prismaClient from "../../Prisma/PrismaClient";

interface Categoria {
    categoria: string
}

class ServicesController {
    async servicesController ({categoria}: Categoria) {
        await prismaClient.categorias.create({
            data: {
                categoria:categoria
            }
        })
            
        return ({dados:"Categoria Efetuado com sucesso"})


    }

    async visualizarPagamento (){
        const resposta =  await prismaClient.categorias.findMany({
            select:{
                id: true,
                categoria: true
            }
        })

        return resposta
        
    }
}


export {ServicesController}