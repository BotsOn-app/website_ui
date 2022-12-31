FROM node:18.8.0-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:18.8.0-alpine

WORKDIR /app

COPY --from=build /app/build .

EXPOSE 3000

CMD ["node", "./app.js"]
