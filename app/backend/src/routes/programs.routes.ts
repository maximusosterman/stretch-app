import express from 'express'

import { createProgram, getAllPrograms, getProgram } from '../controllers/programs.controllers'

const router = express.Router();

router.get("/programs", getAllPrograms)
router.get("/programs/:id", getProgram)
router.post("/programs", createProgram)

export default router