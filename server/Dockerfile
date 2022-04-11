# Docker configurations for angular application

FROM node:12.18-alpine AS server

WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD [ "node", "index.js" ]


# nginx required?
# Reference: https://bit.ly/32pXKdl
