# Shop for everyone

#### Build Client

- from `root` folder
- `cd web-client` go to client
- `npm i` install modules
- `npm run build` build client

#### Build server

- from `root` folder
- `cd api-server`
- `npm i` install modules
- `npm run clean` clean build
- `npm run build` build server

#### Setup ENV file

- from `server` folder
- copy file `.env.sample` to `.env`
- put necessary values

#### Start DB
(if it is necessary)

- from `api-server` folder
- `npm run start-db`


#### Migrate fresh or new schema to DB

- from `api-server` folder
- `npm run migrate`

#### Run Server

- You have to build client and server first
- from `api-server` folder
- `npm run start`
