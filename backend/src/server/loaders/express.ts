import { Application } from 'express';
import cors from 'cors';

export default async (app: Application) => {
  app.use(cors());
};
