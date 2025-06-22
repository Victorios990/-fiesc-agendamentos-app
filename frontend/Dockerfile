# Etapa de build
FROM node:18 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa final para servir
FROM node:18 as runner
WORKDIR /app
COPY --from=builder /app/dist /app/dist
RUN npm install -g serve
EXPOSE 4000
CMD ["serve", "-s", "dist", "-l", "4000"]
