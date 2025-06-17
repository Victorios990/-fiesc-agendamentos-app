import { Router } from 'express'
import agendamentoRoutes from './agendamentos.js'

const router = Router()
router.use('/agendamentos', agendamentoRoutes)

export default router