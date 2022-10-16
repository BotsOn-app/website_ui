FROM node:18.8.0-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm audit fix

RUN npm run build


# stage run
FROM node:16-alpine

WORKDIR /app

COPY --from=0 /app/package*.json ./

RUN npm ci --production --ignore-scripts


RUN npm audit fix

COPY --from=0 /app/build ./

EXPOSE 3000

CMD ["node", "./index.js"]
