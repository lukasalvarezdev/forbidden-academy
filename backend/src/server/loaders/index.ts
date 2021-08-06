import { Application } from 'express';
import { Config } from '../../config/index';

import expressLoader from './express';
import mongooseLoader from './mongoose';
import graphql from './graphql';
import session from './session';

export default async (app: Application, config: Config): Promise<void> => {
  await mongooseLoader(config);

  const graphqlMiddleware = await graphql(config);
  const sessionMiddleware = await session(config);

  await expressLoader(app, graphqlMiddleware, sessionMiddleware);
};
