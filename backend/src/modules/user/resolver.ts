import { Arg, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { User, UserModel } from '../../entities/User';
import { CreateUserInput } from './input';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('data') { name, email }: CreateUserInput
  ): Promise<User> {
    return UserModel.create({ name, email });
  }
  @Query(() => User, { nullable: true })
  async getOneUser(@Arg('id') id: string): Promise<User | null> {
    // TODO: change id from string to ObjectId
    // async getOneUser(@Arg('id') id: ObjectId): Promise<User | null> {
    return UserModel.findById(id);
  }
  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return UserModel.find();
  }
}
