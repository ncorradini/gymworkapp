const { Schema, model } = require('mongoose');

const RoutineSchema = Schema({
    user: String,
    frecuency: Number,
    typeRoutine: String,
    plan: Schema.Types.Mixed
}, { versionKey: false });


module.exports = model("Routine", RoutineSchema);