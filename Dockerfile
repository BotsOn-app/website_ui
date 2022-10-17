FROM node:18.8.0-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build


# stage run
FROM node:18.8.0-alpine

WORKDIR /app

COPY --from=0 /app/package*.json ./

RUN npm ci

COPY --from=0 /app/build ./build

EXPOSE 3000

CMD ["node", "./build"]
