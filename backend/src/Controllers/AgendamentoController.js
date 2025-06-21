import { validationResult } from 'express-validator'
import * as AgendamentoService from '../Services/AgendamentoService.js'

export const listar = async (req, res) => {
  const agendamentos = await AgendamentoService.listar()
  res.json(agendamentos)
}

export const criar = async (req, res) => {
  const erros = validationResult(req)
  if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() })
  try {
    const novo = await AgendamentoService.criar(req.body)
    res.status(201).json(novo)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const atualizar = async (req, res) => {
  const erros = validationResult(req)
  if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() })
  try {
    const atualizado = await AgendamentoService.atualizar(req.params.id, req.body)
    res.json(atualizado)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const remover = async (req, res) => {
  try {
    await AgendamentoService.remover(req.params.id)
    res.status(204).send()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}