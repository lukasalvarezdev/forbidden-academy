// import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLID, GraphQLString } from 'graphql';

// import UserType from './schemas/userSchema';
// import CourseType from './schemas/courseSchema'; './schemas/courseSchema';

// import UserRepo from './repos/usersRepo';
// import CourseRepo from './repos/coursesRepo';

// const userRepo = UserRepo.getInstance()
// const courseRepo = CourseRepo.getInstance()

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     user: {
//       type: UserType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args, context) {
//         return userRepo.getOne(args.id);
//       },
//     },
//     users: {
//       type: new GraphQLList(UserType),
//       resolve(parent, args) {
//         return userRepo.getAll();
//       },
//     },
//     course: {
//       type: CourseType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args, context) {
//         return courseRepo.getOne(args.id);
//       },
//     },
//     courses: {
//       type: new GraphQLList(CourseType),
//       resolve(parent, args) {
//         return courseRepo.getAll();
//       },
//     },
//   },
// });

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addCourse: {
//       type: UserType,
//       args: {},
//       resolve(parent, args) {
//         return 'created';
//       },
//     },
//   },
// });

import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'Hi there!';
        },
      },
    },
  }),
});
