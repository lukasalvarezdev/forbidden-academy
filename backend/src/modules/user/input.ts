import { Field, InputType } from 'type-graphql';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { IsEmailAlreadyExist } from './validator';

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  name: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: 'Email already in use' })
  email: string;
}
