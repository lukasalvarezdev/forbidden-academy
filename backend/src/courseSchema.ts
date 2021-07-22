import { GraphQLString, GraphQLID, GraphQLObjectType } from 'graphql';
import UserRepo from './userRepo';
import UserType from './userSchema';

const userRepo = UserRepo.getInstance()

const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        instructor: {
            type: UserType,
            resolve(parent) {
                return userRepo.getOne(parent.instructorId)
            }
        },
    }),
});


export default CourseType