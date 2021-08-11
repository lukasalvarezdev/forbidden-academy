import bcrypt from 'bcryptjs';
import { issueJWT } from '../../utils/jwt';
import { Arg, Ctx, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { User, UserModel } from '../../entities/User';
import { CreateUserInput, LoginInput } from './input';
import { LoginOutput } from './output';

@Resolver()
export class UserResolver {
  @Mutation(() => LoginOutput)
  async createUser(
    @Arg('data') { name, email, password }: CreateUserInput
  ): Promise<LoginOutput | null> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return { user: newUser, ...issueJWT(newUser._id.toString()) };
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
}
