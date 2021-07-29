import { UserResolver } from './user/resolver';
import { CourseResolver } from './course/resolver';

export const resolvers: [Function, ...Function[]] = [
  UserResolver,
  CourseResolver,
];
