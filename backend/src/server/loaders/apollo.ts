import { createSchema } from '../../utils/createSchema';
import { ApolloServer } from 'apollo-server-express';
import { getUser } from '../../utils/jwt';

export default async () => {
  const schema = await createSchema();

  return new ApolloServer({
    schema,
    context: async ({ req }) => {
      const token = req.headers.authorization || '';
      const user = await getUser(token);
      return user;
    },
  });
};
