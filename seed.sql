CREATE TABLE IF NOT EXISTS agendamentos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  servico VARCHAR(255) NOT NULL,
  data DATE NOT NULL,
  horario TIME NOT NULL
);

INSERT INTO agendamentos (nome, servico, data, horario) VALUES
('João', 'Atendimento Social', '2025-06-25', '10:00'),
('Ana', 'Orientação Profissional', '2025-06-26', '11:30');
