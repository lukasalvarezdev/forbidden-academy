import mongoose from 'mongoose';

import { Config } from '../../config';

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

export const mongoDBConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async ({ mongoURI }: Config): Promise<mongoose.Mongoose> =>
  mongoose.connect(mongoURI, mongoDBConfig);
