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
}


export {ServicesController}