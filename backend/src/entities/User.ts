import { getModelForClass, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';
import { ObjectIdScalar } from '../utils/scalars';

@ObjectType()
export class User {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @prop()
  @Field()
  name!: string;

  @prop()
  @Field()
  email!: string;

  @prop()
  createdAt!: Date;

  @prop()
  updatedAt!: Date;
}

export const UserModel = getModelForClass(User);
