import { graphqlHTTP } from 'express-graphql';
import { Config } from '../../config';
import { createSchema } from '../../utils/createSchema';

export default async ({ isDev }: Config) => {
  const schema = await createSchema();
  return graphqlHTTP({ schema, graphiql: isDev });
};
