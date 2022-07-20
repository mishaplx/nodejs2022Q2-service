FROM node:alpine

LABEL version='2.0'
LABEL name='M.plx'

 WORKDIR /app-rest

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./dist ./dist
RUN npm install


# COPY ./.env ./


EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]