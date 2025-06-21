import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './Routes/Index.js'
import { sequelize } from './Config/Db.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routes)

const PORT = process.env.PORT || 3000

async function startServer() {
  try {
    await sequelize.authenticate()
    console.log('🟢 Conectado ao banco de dados')

    await sequelize.sync()

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`)
    })
  } catch (error) {
    console.error('🔴 Erro ao iniciar o servidor:', error)
  }
}

startServer()
