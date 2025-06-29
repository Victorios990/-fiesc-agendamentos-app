// frontend/src/server.ts
import 'zone.js/node';
import * as express from 'express';
import { join } from 'path';
import { readFile } from 'fs/promises';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';

import { App } from './app/app';
import { appConfig } from './app/app.config.server';

const app = express();
const DIST_FOLDER = join(process.cwd(), 'dist/frontend-app/browser');

// Serve arquivos estáticos
app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y' }));

// SSR
app.get('*', async (req, res) => {
  try {
    const indexHtml = await readFile(join(DIST_FOLDER, 'index.html'), 'utf-8');

    const html = await renderApplication(
      () => bootstrapApplication(App, appConfig),
      {
        document: indexHtml,
        url: req.url
      }
    );

    res.status(200).send(html);
  } catch (err: any) {
    console.error('Erro ao renderizar SSR:', err);
    res.status(500).send(err.message || 'Erro no servidor');
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Angular SSR rodando em http://localhost:${PORT}`);
});
