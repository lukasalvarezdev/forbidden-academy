import { getModelForClass, plugin, prop, Ref } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectIdScalar } from '../utils/scalars';
import { User } from './User';
import autopopulate from 'mongoose-autopopulate';

@ObjectType()
@plugin(autopopulate)
export class Course {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  @prop()
  name!: string;

  @Field(() => User)
  @prop({ ref: User, autopopulate: true })
  instructor: Ref<User>;

  @Field(() => [User])
  @prop({ ref: User, autopopulate: true })
  students: Ref<User>[];

  @prop()
  createdAt!: Date;

  @prop()
  updatedAt!: Date;
}

export const CourseModel = getModelForClass(Course);
