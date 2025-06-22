# Etapa de build
FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build:ssr

# Etapa de produção
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/

EXPOSE 4000

CMD ["node", "dist/server/main.js"]
