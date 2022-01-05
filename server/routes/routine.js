const { Router } = require('express');
const RoutineController = require('../controllers/routine');

const router = Router();

router.get('/routines/:id', RoutineController.getRoutines);
router.post('/routines', RoutineController.newRoutine);
router.delete('/routines/:id', RoutineController.deleteRoutine);

module.exports = router;