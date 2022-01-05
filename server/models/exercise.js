const { Schema, model } = require('mongoose');

const ExerciseSchema = Schema({
    muscle: String,
    exercise: String,
    video: String
}, { versionKey: false });


module.exports = model("Exercise", ExerciseSchema);