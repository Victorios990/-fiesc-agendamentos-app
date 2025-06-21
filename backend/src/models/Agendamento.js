import { DataTypes } from 'sequelize'
import { sequelize } from '../Config/Db.js'

export const Agendamento = sequelize.define('Agendamento', {
  nome: { type: DataTypes.STRING, allowNull: false },
  servico: { type: DataTypes.STRING, allowNull: false },
  data: { type: DataTypes.DATEONLY, allowNull: false },
  horario: { type: DataTypes.STRING, allowNull: false },
})
