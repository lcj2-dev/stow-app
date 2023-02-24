FROM node:16-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install --production && \
    npm run build

FROM node:16-alpine

COPY --from=builder /app/build /app

WORKDIR /app

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npx", "serve", "." ]