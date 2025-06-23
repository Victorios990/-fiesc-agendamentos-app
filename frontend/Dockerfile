# Etapa de build
FROM node:18 AS builder
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:ssr

# Etapa final para rodar SSR
FROM node:18 AS runner
WORKDIR /app

# Copia somente o resultado da build
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

# Expõe a porta do Angular SSR (padrão: 4000 ou 4200)
EXPOSE 4000

# Executa o app server-side
CMD ["node", "dist/frontend-app/server/main.js"]
