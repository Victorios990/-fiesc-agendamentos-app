import { Agendamento } from '../models/Agendamento.js'

export const listar = () => Agendamento.findAll()
export const criar = (dados) => Agendamento.create(dados)
export const atualizar = (id, dados) => Agendamento.update(dados, { where: { id } })
export const remover = (id) => Agendamento.destroy({ where: { id } })