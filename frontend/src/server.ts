import 'zone.js/node';
import express from 'express';
import { join } from 'path';
import { existsSync } from 'fs';
import { AppServerModule } from './main.server';

const DIST_FOLDER = join(process.cwd(), 'dist/frontend-app/browser');

function app(): express.Express {
  const server = express();

  server.use(express.static(DIST_FOLDER, {
    maxAge: '1y'
  }));

  server.get('*', async (req, res) => {
    const { renderModule } = await import('@angular/platform-server');
    const { AppServerModule } = await import('./main.server');

    const { readFile } = await import('fs/promises');
    const indexHtml = await readFile(join(DIST_FOLDER, 'index.html'), 'utf-8');

    renderModule(AppServerModule, {
      document: indexHtml,
      url: req.url,
    }).then(html => {
      res.status(200).send(html);
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`✅ Angular SSR rodando em: http://localhost:${port}`);
  });
}

run();
