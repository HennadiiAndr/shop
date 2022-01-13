import { migrate } from './migrate';

migrate(process.argv)
  .then(() => {
    process.exit(0);
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  .catch(err => {
    console.error('Cannot migrate database schema', err);
    process.exit(1);
  });
