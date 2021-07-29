import { resolvers } from '../modules';
import { buildSchema } from 'type-graphql';

export const createSchema = () => buildSchema({ resolvers });
