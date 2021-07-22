import { GraphQLString, GraphQLID, GraphQLObjectType, GraphQLList } from 'graphql';

import CourseRepo from '../repos/coursesRepo';

import CourseType from './courseSchema';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    teachedCourses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return CourseRepo.getInstance().getAllByAuthor(parent.id)
      }
    },
  }),
});


export default UserType