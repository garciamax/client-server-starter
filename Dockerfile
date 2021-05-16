FROM node:14

WORKDIR /app

COPY . .

RUN npm i --prefix client && npm i --prefix server

CMD ["npm", "run", "deploy"]