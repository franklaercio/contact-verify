FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

FROM node:18-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app ./

COPY .env .env

EXPOSE 3000

CMD ["pnpm", "start"]