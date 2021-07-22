interface student {
    userId: string | number
    courseId: string | number
}

const data: student[] = [
    { userId: 1, courseId: 3 },
    { userId: 2, courseId: 1 },
    { userId: 2, courseId: 2 },
]

class StudentsRepo {
    private static instance: StudentsRepo;

    private constructor() { }

    public static getInstance(): StudentsRepo {
        if (!StudentsRepo.instance) StudentsRepo.instance = new StudentsRepo();
        return StudentsRepo.instance;
    }


    public getAllByUser(userId: string | number) {
        return data.filter(x => x.userId == userId)
    }

    public getAllByCourse(courseId: string | number) {
        return data.filter(x => x.courseId == courseId)
    }

}


export default StudentsRepo
