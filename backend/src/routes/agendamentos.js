import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import * as AgendamentoController from '../controllers/scheduling.controller.js'

const router = Router()

const validateAgendamento = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('servico').notEmpty().withMessage('Serviço é obrigatório'),
  body('data').isISO8601().withMessage('Data inválida'),
  body('horario').notEmpty().withMessage('Horário é obrigatório')
]

router.get('/', AgendamentoController.listar)
router.post('/', validateAgendamento, AgendamentoController.criar)
router.put('/:id', validateAgendamento, AgendamentoController.atualizar)
router.delete('/:id', AgendamentoController.remover)

export default router