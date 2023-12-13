import express from 'express'
import cors from 'cors'

import exercisesRouter from './routes/exercises.routes'

import { serverErrorCatcher } from './controllers/errorHandler.controllers';
import log from './utils/logger';

const app = express();
const PORT = 3000

// Third Parties
app.use(express.json());
app.use(cors());

//Routes
app.use(exercisesRouter)

app.listen(PORT, () => {
    log.info(`Server listening on port ${PORT}`)
})

app.use(serverErrorCatcher)

export default app