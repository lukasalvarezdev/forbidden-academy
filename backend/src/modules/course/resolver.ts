import { Arg, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { CreateCourseInput } from './input';
import { Course, CourseModel } from '../../entities/Course';

@Resolver()
export class CourseResolver {
  @Mutation(() => Course)
  async createCourse(
    @Arg('data') { name, instructorId }: CreateCourseInput
  ): Promise<Course> {
    return CourseModel.create({ name, instructor: instructorId });
  }
  @Query(() => [Course])
  async getAllCourses(): Promise<Course[]> {
    return CourseModel.find();
  }
}
