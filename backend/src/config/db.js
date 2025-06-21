import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  retry: {
    max: 10 // Tenta 10 vezes antes de falhar
  }
})

export { sequelize }
