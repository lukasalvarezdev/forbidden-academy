import { Application } from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';
import graphql from './graphql';
import { Config } from '../../config/index';

export default async (app: Application, config: Config): Promise<void> => {
  await expressLoader(app);
  await mongooseLoader(config);
  await graphql(app, config);
};
