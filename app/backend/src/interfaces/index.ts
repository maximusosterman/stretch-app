
export interface User {
    id: number
    fullname: string
    email: string
    password: string
    programsID: Program["id"][]
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