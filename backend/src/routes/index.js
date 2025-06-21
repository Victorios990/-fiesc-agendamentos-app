import { Router } from 'express'
import agendamentoRoutes from './Agendamentos.js'

const router = Router()
router.use('/agendamentos', agendamentoRoutes)

export default router