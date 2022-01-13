FROM node:12-alpine as build-stage

ARG NODE_ENV
ARG REACT_APP_API_SERVER
ARG PUBLIC_URL
# ENV REACT_APP_API_SERVER $REACT_APP_API_SERVER

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./package-lock.json /usr/src/app

COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src

RUN npm install
RUN npm run build

FROM nginx:1.15.2-alpine

COPY --from=build-stage /usr/src/app/build /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
