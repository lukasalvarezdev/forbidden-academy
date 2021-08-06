import { Application } from 'express';
import cors from 'cors';

export default async (app: Application, graphql: any, session: any) => {
  app.use(cors());
  app.use(session);
  app.use('/graphql', graphql);
};
