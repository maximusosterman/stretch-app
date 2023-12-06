import express, { Request, Response } from 'express'

const app = express();
const PORT = 3000

app.use(express.json());

app.get("/exercises", (req: Request, res: Response) => {
    res.status(200)
    res.json(exercieses)
})

app.get("/exercises/:id", (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const exercise = exercieses.filter(exercise => exercise.id === id)

    if (!exercise.length) return res.status(404).send("Exercise not found!")
    res.status(200).json(exercise[0])

})

app.post("/exercises", (req: Request, res: Response) => {

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
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`)
})

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
export default app