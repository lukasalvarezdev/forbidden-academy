interface course {
    id: string | number
    name: string
    instructorId: string | number
}

const data: course[] = [
    { id: 1, name: 'cursoTeo1', instructorId: 1 },
    { id: 2, name: 'cursoTeo2', instructorId: 1 },
    { id: 3, name: 'cursoTeo3', instructorId: 2 }
]

class CourseRepo {
    private static instance: CourseRepo;

    private constructor() { }

    public static getInstance(): CourseRepo {
        if (!CourseRepo.instance) CourseRepo.instance = new CourseRepo();
        return CourseRepo.instance;
    }

    public getOne(id: string) {
        return data.find(x => x.id == id)
    }

    public getAll() {
        return data
    }

    public getAllByAuthor(instructorId: string | number) {
        return data.filter(x => x.instructorId == instructorId)
    }
}


export default CourseRepo
