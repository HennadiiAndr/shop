FROM node:12-alpine as build-stage

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Next stage
FROM node:12-alpine

COPY --from=build-stage ./dist ./dist
COPY --from=build-stage package*.json ./
RUN npm install --only=production

ARG PORT=8000
ARG POSTGRES_CONNECTION

EXPOSE ${PORT}

EXPOSE ${PORT}
CMD [ "node", "./dist" ]
