import { prop, getModelForClass, Ref, plugin } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType, Root } from 'type-graphql';
import { ObjectIdScalar } from '../utils/scalars';
import { Course, CourseModel } from './Course';
import autopopulate from 'mongoose-autopopulate';

@ObjectType()
@plugin(autopopulate)
export class User {
  @Field(() => ObjectIdScalar)
  public readonly _id: ObjectId;

  @prop()
  @Field()
  name: string;

  @prop()
  @Field()
  email: string;

  @prop()
  password: string;

  @Field(() => [Course])
  async teachedCourses(@Root() parent: any): Promise<Course[]> {
    return CourseModel.find({ instructor: parent._id });
  }

  @Field(() => [Course], { nullable: true })
  @prop({ ref: 'Course', autopopulate: true })
  enrolledCourses: Ref<Course>[];

  @prop()
  createdAt!: Date;

  @prop()
  updatedAt!: Date;
}

export const UserModel = getModelForClass(User);
