import { Application } from 'express';
import { Config } from '../../config/index';

import expressLoader from './express';
import mongooseLoader from './mongoose';
import apolloLoader from './apollo';
import { ApolloServer } from 'apollo-server-express';

export default async (
  app: Application,
  config: Config
): Promise<ApolloServer> => {
  await expressLoader(app);
  await mongooseLoader(config);
  return apolloLoader();
};
