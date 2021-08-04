import { prop, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType, Root } from 'type-graphql';
import { ObjectIdScalar } from '../utils/scalars';
import { Course, CourseModel } from './Course';

@ObjectType()
export class User {
  @Field(() => ObjectIdScalar)
  _id: ObjectId;

  @prop()
  @Field()
  name!: string;

  @prop()
  @Field()
  email!: string;

  @Field(() => [Course])
  async teachedCourses(@Root() parent: User): Promise<Course[]> {
    const courses = await CourseModel.find();
    console.log(courses.map((x) => x._id));
    console.log(parent.email);
    console.log(parent.createdAt);
    console.log(parent.name);
    console.log(parent.updatedAt);
    console.log(parent._id);
    return CourseModel.find({ instructor: '61083e32d64e0c6d75dff2d2' });
  }

  @prop()
  createdAt!: Date;

  @prop()
  updatedAt!: Date;
}

export const UserModel = getModelForClass(User);
