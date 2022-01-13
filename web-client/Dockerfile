FROM node:12-alpine as build-stage

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./package-lock.json /usr/src/app

COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src
COPY ./tsconfig.json /usr/src/app

RUN npm install
RUN npm run build

FROM nginx:1.15.2-alpine

COPY --from=build-stage /usr/src/app/build /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
