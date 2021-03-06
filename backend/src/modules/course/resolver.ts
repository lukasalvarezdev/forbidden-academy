import { Arg, Ctx, Mutation } from 'type-graphql';
import { Resolver, Query } from 'type-graphql';
import { CreateCourseInput, UpdateCourseInput } from './input';
import { Course, CourseModel } from '../../entities/Course';
import { UserModel, User } from '../../entities/User';

@Resolver()
export class CourseResolver {
  @Mutation(() => Course, { nullable: true })
  async createCourse(
    @Arg('data') { name }: CreateCourseInput,
    @Ctx() user: User
  ): Promise<Course | null> {
    if (!user._id) return null;
    return CourseModel.create({ name, instructor: user });
  }
  @Mutation(() => Boolean)
  async addStudent(
    @Arg('courseid') courseId: String,
    @Ctx() student: User
  ): Promise<Boolean> {
    if (!student._id) return false;

    const [course, user] = await Promise.all([
      CourseModel.findById(courseId),
      UserModel.findById(student._id),
    ]);

    if (!course || !user) return false;
    if (isUserCourseInstructor(course, user) || isUserAlreadyStudent())
      return false;

    course.students = [...new Set([...course.students, user])];
    user.enrolledCourses = [...new Set([...user.enrolledCourses, course])];
    await Promise.all([course.save(), user.save()]);

    return true;

    function isUserAlreadyStudent() {
      return course!.students
        .map((x) => (x as User)._id.toString())
        .includes(user!._id.toString());
    }
  }
  @Mutation(() => Course, { nullable: true })
  async updateCourse(
    @Arg('data') { courseId, name }: UpdateCourseInput,
    @Ctx() user: User
  ): Promise<Course | null> {
    if (!user._id) return null;

    const course = await CourseModel.findById(courseId);
    if (!course || !isUserCourseInstructor(course, user)) return null;

    course.name = name;
    await course.save();

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

function isUserCourseInstructor(course: Course, user: User) {
  return (course!.instructor as User)._id.toString() == user!._id.toString();
}
