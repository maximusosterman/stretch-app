import express from 'express'
import { getAllExercises, getExercise, addExercise } from '../controllers/exercises.controllers';

const router = express.Router();

router.get("/exercises", getAllExercises)
router.get("/exercises/:id", getExercise)
router.post("/exercises", addExercise)

export default router