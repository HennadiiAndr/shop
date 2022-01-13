# It Is My Shop

### Run with local DB
```
export const POSTGRES_CONNECTION=postgres://postgres@localhost:5432/shop && npm run build && npm start
```

### Build & Start
```
npm run clean
npm run build
npm run start-db
npm run start
```

Go to the:

http://127.0.0.1:8000/explorer/

### ENV
```
API_HOST
API_PORT
DATA_SOURCE_DB_URL
TOKEN_SECRET_VALUE
TOKEN_EXPIRES_IN_VALUE
```

### Powered by
[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
