import express from 'express';
import { Config } from '../config';
import loaders from './loaders';

export default async (config: Config) => {
  const app = express();

  await loaders(app, config);

  app.listen(config.port, () => {
    console.log(`Server ready at http://localhost:${config.port}`);
  });
};
