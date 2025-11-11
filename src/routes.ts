import { Router } from "express"
import {ClientesControllers} from "./Controllers/ClientesControllers/ClientesControllers"

const router = Router()


router.post("/ClientesControllers", new ClientesControllers().clientesControllers)

export default router

