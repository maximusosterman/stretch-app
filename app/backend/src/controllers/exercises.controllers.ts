import express, { Request, Response } from 'express'

export function addExercise(req: Request, res: Response) {
    const { name, duration, description } = req.body
    if(!name || !duration || !description) return res.status(400).send("Please send a name, duration and description")

    const newExercise = {
        id: exercieses.length + 1,
        name: name,
        duration: duration,
        description: description
    }

    exercieses.push(newExercise)
    res.status(201).json(newExercise)
}

export function getExercise(req: Request, res: Response) {
    const id = Number(req.params.id)
    const exercise = exercieses.filter(exercise => exercise.id === id)

    if (!exercise.length) return res.status(404).send("Exercise not found!")
    res.status(200).json(exercise[0])
}

export function getAllExercises(req: Request, res: Response) {
    res.status(200)
    res.json(exercieses)
}

const exercieses = [
    {
        id: 1,
        name: "Hamstring",
        duration: 60,
        description: "Bend down and try to reach down to your feet"
    },
    {
        id: 2,
        name: "Höftböjaren",
        duration: 60,
        description: "Vet inte"
    }
]