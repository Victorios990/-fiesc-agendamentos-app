# -fiesc-agendamentos-app

# AgendaFIESC – Sistema de Agendamento de Atendimentos

Projeto desenvolvido para o processo seletivo da FIESC / SESC, com foco em automação de testes e desenvolvimento de aplicações web utilizando tecnologias modernas.

## Tecnologias Utilizadas

- **Frontend**: HTML + JavaScript (Vite)
- **Backend**: Node.js + Express
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker + Docker Compose
- **Testes E2E**: Cypress

---

## Como Executar o Projeto

### 1. Pré-requisitos

- Docker instalado
- Node.js e npm instalados (opcional, apenas para uso local sem Docker)
- Git

### 2. Clonando o repositório

```bash
git clone https://github.com/Victorios990/-fiesc-agendamentos-app.git
cd -fiesc-agendamentos-app
```

### 3. Subindo com Docker

```bash         >>>>>>>> Deve ser Ajustado
docker compose up --build

cd /Users/victor/Documents/WorkSpaces/fiesc-agendamentos-app.git/-fiesc-agendamentos-app
docker compose up --build


```

A aplicação estará disponível em:

- Frontend: http://localhost:5173  
- Backend (API): http://localhost:3000  
- Banco de dados (PostgreSQL): porta 5432

---

## Endpoints da API

### `GET /api/agendamentos`

Retorna a lista de agendamentos cadastrados.

### `POST /api/agendamentos`

Cria um novo agendamento.

### `PUT /api/agendamentos/:id`

Atualiza os dados de um agendamento existente.

### `DELETE /api/agendamentos/:id`

Remove um agendamento pelo ID.

**Body esperado (JSON):**

```json
{
  "nome": "Maria",
  "servico": "Orientação Profissional",
  "data": "2025-06-25",
  "horario": "10:00"
}
```

---

## Executando os Testes E2E com Cypress

Com a aplicação rodando (`docker compose up`), em outro terminal execute:

### Abrir Cypress UI

```bash
npx cypress open
```

### Executar testes em modo headless

```bash
npx cypress run
```

Os testes estão localizados em:

```
cypress/e2e/agendamento.cy.js
```

---

## Estrutura de Pastas

```
.
├── backend/                # API Node.js + Express
│   └── ...                
├── frontend/               # Frontend com Vite
│   └── index.html
│   └── main.js
├── cypress/                # Testes automatizados
│   └── e2e/
│       └── agendamento.cy.js
├── docker-compose.yml      # Orquestração com Docker
└── README.md               # Documentação do projeto
```
---

## Considerações

- Projeto demonstrativo com foco em organização, testes automatizados e clareza de código.
- Ideal para avaliações de QA com ênfase em testes E2E e integração de sistemas.

---

## Autor

José Victor C. L. de Almeida  
[LinkedIn](https://www.linkedin.com/in/victoralmeidaqa/)  
[GitHub](https://github.com/Victorios990/-fiesc-agendamentos-app#)

---
