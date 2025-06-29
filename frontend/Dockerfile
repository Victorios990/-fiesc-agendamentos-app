# Etapa 1: build SSR
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:ssr

# Etapa 2: imagem de execução
FROM node:20
WORKDIR /app
COPY --from=builder /app/dist/frontend-app /app/dist/frontend-app
COPY --from=builder /app/node_modules /app/node_modules
EXPOSE 4000
CMD ["node", "dist/frontend-app/server/main.js"]
