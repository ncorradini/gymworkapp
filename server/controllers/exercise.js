const Exercise = require('../models/exercise');

const getExercises = async (req, res) => {
    const exercises = await Exercise.find();
    return res.json(exercises);
}

const getExercisesMuscle = async (req, res) => {
    const exercises = await Exercise.find({ muscle: req.params.muscle });
    return res.json(exercises);
}

const newExercise = (req, res) => {
    const { muscle, exercise, video } = req.body;
    const addExercise = new Exercise({ 
        muscle,
        exercise,
        video
    });
    addExercise.save();
    res.send({message: 'Guardado correctamente'})
}

module.exports = {
    getExercises,
    getExercisesMuscle,
    newExercise
}