import { getModelForClass, prop } from '@typegoose/typegoose';
// import { ObjectId } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

// TODO: try autopopulate
@ObjectType()
export class User {
  @Field()
  readonly _id!: string;

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
