import { Field, InputType } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';
import { ObjectIdScalar } from '../../utils/scalars';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateCourseInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  name: string;
}

@InputType()
export class UpdateCourseInput {
  @Field(() => ObjectIdScalar)
  courseId: ObjectId;

  @Field()
  @MaxLength(300)
  @MinLength(1)
  name: string;
}
