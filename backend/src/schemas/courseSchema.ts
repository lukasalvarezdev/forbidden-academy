import { GraphQLString, GraphQLID, GraphQLObjectType, GraphQLList } from 'graphql';
// TODO: Dependency Injection with awilix
import UserRepo from '../repos/usersRepo';
import StudentRepo from '../repos/studentsRepo';


import UserType from './userSchema';


const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        instructor: {
            type: UserType,
            resolve(parent) {
                return UserRepo.getInstance().getOne(parent.instructorId)
            }
        },
        students: {
            type: new GraphQLList(UserType),
            resolve(parent) {
                return StudentRepo.getInstance().getAllByCourse(parent.id)
            }
        },
    }),
});


export default CourseType