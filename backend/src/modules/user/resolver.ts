import bcrypt from 'bcryptjs';
import { Arg, Ctx, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { User, UserModel } from '../../entities/User';
import { CreateUserInput, LoginInput } from './input';

import { MyContext } from '../../types/MyContext';

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(
    @Arg('data') { name, email, password }: CreateUserInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    return UserModel.create({ name, email, password: hashedPassword });
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('data') { email, password }: LoginInput,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    const user = await UserModel.findOne({ email });
    if (!user) return null;

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return null;
    ctx.req.session.userId = user.id; //Store the cookie in redis
    return user;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve, reject) => {
      req.session.destroy((err: any) => {
        if (err) return reject(false);
        res.clearCookie('qid');
        resolve(true);
      });
    });
  }

  @Query(() => User, { nullable: true })
  async getMyUser(
    @Ctx() { req: { session } }: MyContext
  ): Promise<User | null> {
    return session?.userId ? UserModel.findById(session.userId) : null;
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
