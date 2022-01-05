const { Router } = require('express');
const ExerciseController = require('../controllers/exercise');

const router = Router();

router.get('/exercises', ExerciseController.getExercises);
router.get('/exercises/:muscle', ExerciseController.getExercisesMuscle);
router.post('/exercises', ExerciseController.newExercise);

module.exports = router;