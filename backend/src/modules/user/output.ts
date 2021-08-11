import { Field, ObjectType } from 'type-graphql';
import { User } from '../../entities/User';

@ObjectType()
export class LoginOutput {
  @Field()
  user: User;

  @Field()
  token: String;

  @Field()
  tokenExpiry: String;
}
