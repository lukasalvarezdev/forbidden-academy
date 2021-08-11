import bcrypt from 'bcryptjs';
import { issueJWT } from '../../utils/jwt';
import { Arg, Ctx, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { User, UserModel } from '../../entities/User';
import { CreateUserInput, LoginInput } from './input';
import { LoginOutput } from './output';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('data') { name, email, password }: CreateUserInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    return UserModel.create({ name, email, password: hashedPassword });
  }

  @Mutation(() => LoginOutput, { nullable: true })
  async login(
    @Arg('data') { email, password }: LoginInput
  ): Promise<LoginOutput | null> {
    const user = await UserModel.findOne({ email });
    if (!user) return null;

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return null;
    const token = issueJWT(user._id.toString());
    const result: LoginOutput = { user, ...token };
    return result;
  }

  @Query(() => User, { nullable: true })
  async getMyUser(@Ctx() user: User): Promise<User | null> {
    return user._id ? user : null;
  }

  @Query(() => User, { nullable: true })
  async getOneUser(@Arg('id') id: string): Promise<User | null> {
    return UserModel.findById(id);
  }

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return UserModel.find();
  }
}
