
export interface User {
    id: number
    fullname: string
    email: string
    password: string
    programs: Program[]
}

export interface Exercise {
    id: number
    name: string
    duration: number
    description?: string
}

export interface Program {
    id: number
    name: string
    description?: string
    exercises: Exercise["id"][]
    userID: User["id"]
}