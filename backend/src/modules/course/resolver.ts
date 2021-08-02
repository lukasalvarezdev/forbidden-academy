import { Arg, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { CreateCourseInput, AddStudentInput } from './input';
import { Course, CourseModel } from '../../entities/Course';
import { UserModel } from '../../entities/User';

@Resolver()
export class CourseResolver {
  @Mutation(() => Course)
  async createCourse(
    @Arg('data') { name, instructorId }: CreateCourseInput
  ): Promise<Course> {
    return CourseModel.create({ name, instructor: instructorId });
  }
  @Mutation(() => Course, { nullable: true })
  async addStudent(
    @Arg('data') { courseId, studentId }: AddStudentInput
  ): Promise<Course | null> {
    const course = await CourseModel.findById(courseId);
    if (!course) return null;

    const student = await UserModel.findById(studentId);
    if (student) {
      // TODO: bug with repeated element first time
      course.students = [...new Set([...course.students, student])];
      await course.save();
    }
    return course;
  }
  @Query(() => [Course])
  async getAllCourses(): Promise<Course[]> {
    return CourseModel.find();
  }
  @Query(() => Course, { nullable: true })
  async getCourse(@Arg('id') id: string): Promise<Course | null> {
    return CourseModel.findById(id);
  }
}
