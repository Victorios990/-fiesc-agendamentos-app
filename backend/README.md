# Backend - agendamentosAPP

Este é o backend do sistema **agendamentosAPP**, uma API REST desenvolvida com **Node.js + Express**, conectada a um banco de dados **PostgreSQL**.

## 🔧 Tecnologias

- Node.js
- Express
- PostgreSQL
- Docker
- ESLint / Prettier
- Jest (para testes)

## 📁 Estrutura de Pastas

src/
├── controllers/
├── services/
├── models/
├── middlewares/
├── routes/
├── config/
├── utils/
├── tests/
└── app.js


## 🚀 Como Executar

### 🔹 1. Com Docker (recomendado)

```bash
cd backend
docker build -t agendamentos-backend .
docker run -p 3000:3000 agendamentos-backend

 2. Localmente com Node.js

 cd backend
npm install
npm run dev
npm test

📄 Endpoints
GET /api/agendamentos
POST /api/agendamentos
PUT /api/agendamentos/:id
DELETE /api/agendamentos/:id

⚙️ Variáveis de Ambiente (.env)

PORT=3000
DATABASE_URL=postgres://user:password@db:5432/agendamentosdb

👤 Autor
José Victor C. L. de Almeida
LinkedIn