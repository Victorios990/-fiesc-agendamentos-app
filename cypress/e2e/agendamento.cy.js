//<reference types="cypress" />

describe('Agendamento de atendimentos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it.only('deve carregar a interface com o formulário e a lista', () => {
    cy.get('h1').should('contain', 'Agendamento de Atendimentos')
    cy.get('form').should('exist')
    cy.get('#lista').should('exist')
  })

  it('deve permitir agendar um atendimento', () => {
    const nome = 'José QA'
    const servico = 'Consulta Técnica'
    const data = '2025-06-25'
    const horario = '10:30'

    cy.get('input[name="nome"]').type(nome)
    cy.get('input[name="servico"]').type(servico)
    cy.get('input[name="data"]').type(data)
    cy.get('input[name="horario"]').type(horario)
    cy.get('form').submit()

    cy.contains('li', `${nome}`).should('exist')
    cy.contains('li', `${servico}`).should('exist')
  })
})

// tests/cypress/e2e/agendamento_negativo.cy.js

describe('Agendamento - Cenários Negativos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Não deve permitir envio de formulário com campos vazios', () => {
    cy.contains('Agendar Atendimento').click()
    cy.get('button[type="submit"]').click()
    cy.contains('Preencha todos os campos obrigatórios').should('be.visible')
  })

  it('Não deve permitir agendamento com data anterior à atual', () => {
    cy.get('#nome').type('Usuário Teste')
    cy.get('#servico').select('Atendimento SESC')
    cy.get('#data').type('2020-01-01')
    cy.get('button[type="submit"]').click()
    cy.contains('A data do agendamento deve ser futura').should('be.visible')
  })
})
