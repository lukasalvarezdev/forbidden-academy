import { Field, InputType } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateCourseInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  name: string;

  @Field()
  @MinLength(1)
  instructorId: string;
}
