import { Field, InputType } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';
import { ObjectId } from 'mongoose';
import { ObjectIdScalar } from '../../utils/scalars';

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

@InputType()
export class AddStudentInput {
  @Field(() => ObjectIdScalar)
  courseId: ObjectId;

  @Field(() => ObjectIdScalar)
  studentId: ObjectId;
}
