const application = require('./main');
const { migrate } = require('./migrate/migrate');
const { API_PORT, API_HOST } = require('./config/host');

const config = {
  rest: {
    port: API_PORT,
    host: API_HOST,
    openApiSpec: {
      // useful when used with OpenAPI-to-GraphQL to locate your application
      // setServersFromRequest: true,
      setServersFromRequest: false,
    },
  },
};

const start = async () => {
  await migrate(process.argv)
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    .catch(err => {
      console.error('Cannot migrate database schema', err);
      process.exit(1);
    });

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start();
