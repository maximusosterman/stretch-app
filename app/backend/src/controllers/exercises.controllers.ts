import express, { Request, Response } from 'express'

export function createExercise(req: Request, res: Response) {
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
    const exercise = exercieses.find(exercise => exercise.id === id)

    if (!exercise) return res.status(404).send("Exercise not found!")
    res.status(200).json(exercise)
}

export function getAllExercises(req: Request, res: Response) {
    res.status(200)
    res.json(exercieses)
}

export function updateExercise(req: Request, res: Response) {
    const id = Number(req.params.id)
    const { name, duration, description } = req.body

    if(!name || !duration || !description) return res.status(400).send("Please send a name, duration and description")

    const exercise = exercieses.find(exercise => exercise.id === id)

    if (!exercise) return res.status(404).send("Exercise not found!")

    exercise.name = name
    exercise.duration = duration
    exercise.description = description

    res.status(200).json(exercise)
}

// export function deleteExercise(req: Request, res: Response) {
//     const id = Number(req.params.id)
//     const exercise = exercieses.findIndex(exercise => exercise.id === id) + 1

//     if (!exercise) return res.status(404).send("Exercise not found!")

//     exercieses.splice(exercise, 1)

//     console.log(exercieses)

//     res.status(204).send("Exercise was deleted")
// }

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