import { Arg, buildSchema, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { User, UserModel } from '../entities/User';

@Resolver()
class TestResolver {
  @Query(() => String)
  async hello() {
    return 'Hi There!';
  }
  @Mutation(() => User)
  async create(
    @Arg('name') name: string,
    @Arg('email') email: string
  ): Promise<User> {
    return UserModel.create({ name, email });
  }
}

export const createSchema = () =>
  buildSchema({
    resolvers: [TestResolver],
  });
