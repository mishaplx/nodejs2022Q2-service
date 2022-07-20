FROM node:alpine

LABEL version='2.0'
LABEL name='M.plx'

WORKDIR /app

COPY package*.json ./
COPY ./.env ./
COPY tsconfig*.json ./

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]