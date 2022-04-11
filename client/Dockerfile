# Docker configurations for angular application

# FROM node:12.18-alpine AS build

# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build:prod

# FROM node:12.18-alpine AS build

# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# COPY public ./
# RUN npm install
# COPY . .
# RUN npm run build:prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine AS nginx
COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/public /usr/share/nginx/html
COPY public /usr/share/nginx/html
