interface user {
    id: string | number
    name: string
    email: string
}

const data: user[] = [
    { id: 1, name: 'mateo', email: 'mateo@email.com' },
    { id: 2, name: 'lukas', email: 'lukas@email.com' }
]

// TODO: add authorization at this level using the context
class UserRepo {
    private static instance: UserRepo;

    private constructor() { }

    public static getInstance(): UserRepo {
        if (!UserRepo.instance) UserRepo.instance = new UserRepo();
        return UserRepo.instance;
    }

    public getOne(id: string) {
        return data.find(x => x.id == id)
    }

    public getAll() {
        return data
    }
}


export default UserRepo
