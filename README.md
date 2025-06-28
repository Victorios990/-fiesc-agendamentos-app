Sistema de Agendamento de Atendimentos
Projeto desenvolvido com foco em organização, automação de testes e desenvolvimento de aplicações web utilizando tecnologias modernas.

🚀 Tecnologias Utilizadas
Frontend: Angular 17 + SSR (Server-Side Rendering)

Backend: Node.js + Express

Banco de Dados: PostgreSQL

Containerização: Docker + Docker Compose

Testes E2E: Cypress

⚙️ Como Executar o Projeto
1. Pré-requisitos
Docker e Docker Compose instalados

Node.js e npm (opcional, apenas para uso local)

Git

2. Clonando o repositório
bash
Copiar
Editar
git clone https://github.com/Victorios990/agendamentosAPP.git
cd agendamentosAPP
3. Subindo com Docker
bash
Copiar
Editar
docker compose up --build
Após a inicialização, acesse:

🌐 Frontend: http://localhost:4200

📦 Backend (API): http://localhost:3000

🗄️ Banco de Dados (PostgreSQL): porta 5432

📌 Endpoints da API
GET /api/agendamentos
Retorna a lista de agendamentos cadastrados.

POST /api/agendamentos
Cria um novo agendamento.

PUT /api/agendamentos/:id
Atualiza os dados de um agendamento existente.

DELETE /api/agendamentos/:id
Remove um agendamento pelo ID.

Exemplo de body (JSON):

json
Copiar
Editar
{
  "nome": "Maria",
  "servico": "Orientação Profissional",
  "data": "2025-06-25",
  "horario": "10:00"
}
🧪 Executando os Testes E2E com Cypress
Com a aplicação rodando (docker compose up), em outro terminal execute:

Abrir Cypress UI
bash
Copiar
Editar
npx cypress open
Rodar em modo headless
bash
Copiar
Editar
npx cypress run
Os testes estão localizados em:
cypress/e2e/agendamento.cy.js

🗂️ Estrutura de Pastas
bash
Copiar
Editar
.
├── backend/                # API Node.js + Express
├── frontend/               # Frontend Angular + SSR
├── cypress/                # Testes E2E com Cypress
│   └── e2e/
│       └── agendamento.cy.js
├── docs/                   # Documentação de requisitos, histórias, etc.
├── docker-compose.yml      # Orquestração de containers
└── README.md               # Documentação principal do projeto
📌 Considerações
Projeto demonstrativo com foco em clareza, organização e testes automatizados.

Ideal para avaliações de Qualidade de Software (QA) com foco em integração entre frontend, backend e testes E2E.

👤 Autor
José Victor C. L. de Almeida
🔗 LinkedIn
💻 GitHub

