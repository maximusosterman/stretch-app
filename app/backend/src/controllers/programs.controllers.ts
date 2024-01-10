import { Request, Response } from 'express'

import { Program } from '../interfaces'

export function getAllPrograms(req: Request, res: Response) {

    res.status(200)
    res.json(programs)

}

export function getProgram(req: Request, res: Response) {
    const id = Number(req.params.id)
    const program = programs.find(program => program.id === id)

    if (!program) return res.status(404).send("Program not found!")
    res.status(200).json(program)
}

export function createProgram(req: Request, res: Response) {

    const { name, exercises, description, userID } = req.body

    if (!name || !exercises || !userID ) return res.status(401).json("Please enter a program name, description, exercises and user")

    const createdProgram: Program = {
        id: programs.length + 1,
        name: name,
        exercises: exercises,
        description: description,
        userID: userID
    }

    res.status(201).json(createdProgram)

}

const programs: Program[] = [
    {
        id: 1,
        name: "Program1",
        description: "This is a description",
        userID: 1,
        exercises: [1]
    }
]