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
    const [course, user] = await Promise.all([
      CourseModel.findById(courseId),
      UserModel.findById(studentId),
    ]);

    if (!course || !user) return null;

    // TODO: bug with repeated element first time
    course.students = [...new Set([...course.students, user])];
    user.enrolledCourses = [...new Set([...user.enrolledCourses, course])];
    await Promise.all([course.save(), user.save()]);

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
