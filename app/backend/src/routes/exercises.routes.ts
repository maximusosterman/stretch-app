import express from 'express'

import { getAllExercises, getExercise, createExercise, updateExercise } from '../controllers/exercises.controllers';

const router = express.Router();

router.get("/exercises", getAllExercises)
router.get("/exercises/:id", getExercise)
router.post("/exercises", createExercise)
router.put("/exercises/:id", updateExercise)
// router.delete("/exercises/:id", deleteExercise)

export default router