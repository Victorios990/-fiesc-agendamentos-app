import request from 'supertest';
import app from '../app.js';

describe('API de Agendamentos', () => {
  it('deve responder com status 200 na rota GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});