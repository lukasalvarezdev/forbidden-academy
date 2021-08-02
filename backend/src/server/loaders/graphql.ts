import { graphqlHTTP } from 'express-graphql';
import { Config } from '../../config';
import { Application } from 'express';
import { createSchema } from '../../utils/createSchema';

export default async (app: Application, { isDev }: Config) => {
  const schema = await createSchema();
  app.use('/graphql', graphqlHTTP({ schema, graphiql: isDev }));
};
