import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { sequelize } from './utils/db.js'
import routes from './routes/index.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routes)

const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })
})