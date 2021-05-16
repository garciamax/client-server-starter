FROM node:14

WORKDIR /app

COPY . .

RUN npm run install-client-server

RUN npm run build-client

CMD ["npm", "run", "deploy-server"]