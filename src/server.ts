import express, {Request, Response, NextFunction, json} from 'express'
import cors from "cors"
import "express-async-errors"
import router from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


app.use((err:Error, req: Request, res:Response, next:NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({
            error:err.message
        })
    }

    return res.status(500).json ({
        status: "Erro",
        message: "Erro interno do servidor"
    })
})


app.listen(3333,() => console.log("Servidor On-line na porta 3333"))
