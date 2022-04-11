FROM node:14.15.1-alpine AS angular

WORKDIR /usr/medialabs-ui/client
COPY ./client ./
RUN npm install
RUN npm run build:prod

FROM node:14.15.1-alpine AS express

WORKDIR /usr/medialabs-ui/server
COPY ./server ./
RUN npm install

COPY --from=angular /usr/medialabs-ui/client/public /usr/medialabs-ui/server/public/

CMD [ "node", "index.js" ]
