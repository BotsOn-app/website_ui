FROM node:18.8.0-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


# stage run
FROM node:18.8.0-alpine

WORKDIR /app

COPY --from=0 /app/package*.json ./

RUN npm install

COPY --from=0 /app/build ./

EXPOSE 3000

CMD ["node", "./index.js"]
