import express from 'express';
import { Config } from '../config';
import loaders from './loaders';

export default async (config: Config) => {
  const app = express();

  const server = await loaders(app, config);

  await server.start();
  server.applyMiddleware({ app, path: '/' });

  app.listen(config.port, () => {
    console.log(`Server ready at http://localhost:${config.port}`);
  });
};
