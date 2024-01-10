import express from 'express'

import { createProgram, getAllPrograms, getProgram, updateProgram } from '../controllers/programs.controllers'

const router = express.Router();

router.get("/programs", getAllPrograms)
router.get("/programs/:id", getProgram)
router.post("/programs", createProgram)
router.put("/programs/:id", updateProgram)

export default router