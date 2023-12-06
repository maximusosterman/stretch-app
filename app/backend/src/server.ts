import express from 'express'
import cors from 'cors'

import exercisesRouter from './routes/exercises.routes'
import { serverErrorCatcher } from './controllers/errorHandler.controllers';

const app = express();
const PORT = 3000

app.use(express.json());
app.use(cors());

app.use(exercisesRouter)

app.use(serverErrorCatcher)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}...`)
})


export default app