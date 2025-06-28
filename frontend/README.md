
---

### 📁 `frontend/README.md`

```markdown
# Frontend - agendamentosAPP

Este é o frontend do sistema **agendamentosAPP**, desenvolvido com **Angular 17** com suporte a **SSR (Server-Side Rendering)**.

## 🧰 Tecnologias

- Angular 17
- Angular Universal (SSR)
- RxJS
- Docker

## 📁 Estrutura

frontend/
├── src/
│ ├── app/
│ ├── assets/
│ └── environments/
├── angular.json
└── package.json


## 🚀 Como Executar

### 🔹 1. Com Docker (recomendado)

```bash
cd frontend
docker build -t agendamentos-frontend .
docker run -p 4200:4200 agendamentos-frontend

2. Localmente com Angular CLI

cd frontend
npm install
npm run dev:ssr

A aplicação estará disponível em: http://localhost:4200

📦 Comandos Úteis

npm run build:ssr: # Build com SSR
npm run serve:ssr: # Servir com SSR
npm run lint: # Rodar lint
npm run test: # Rodar testes unitários


📄 Variáveis de Ambiente
As URLs e configurações estão em:

src/environments/environment.ts

👤 Autor
José Victor C. L. de Almeida
LinkedIn
