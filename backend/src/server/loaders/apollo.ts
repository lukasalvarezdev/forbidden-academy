import { createSchema } from '../../utils/createSchema';
import { ApolloServer } from 'apollo-server-express';

export default async () => {
  const schema = await createSchema();

  return new ApolloServer({
    schema,
    // context: ({ req, res }) => ({ req, res }),
    // playground: config.isDev,
  });
};
