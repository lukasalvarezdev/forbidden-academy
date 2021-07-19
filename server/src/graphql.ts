import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLID } from 'graphql';

import UserType from './userSchema';

import UserRepo from './userRepo';

const userRepo = UserRepo.getInstance()

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args, context) {
        return userRepo.getOne(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return userRepo.getAll();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCourse: {
      type: UserType,
      args: {},
      resolve(parent, args) {
        return 'created';
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
