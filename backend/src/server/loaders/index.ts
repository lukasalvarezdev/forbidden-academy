import { Application } from 'express';
import expressLoader from './express';
import mongooseLoader from './mongoose';
import expressQLLoader from './express-graphql';
import { Config } from '../../config/index';

export default async (app: Application, config: Config): Promise<void> => {
  await expressLoader(app);
  await mongooseLoader(config);
  await expressQLLoader(app, config);
};
