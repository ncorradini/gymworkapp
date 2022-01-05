const Routine = require('../models/routine');

const getRoutines = async (req, res) => {
    const routines = await Routine.find({ user: req.params.id });
    return res.json(routines);
}

const newRoutine = (req, res) => {
    const { plan, frecuency, routine, user } = req.body;

    if (!user || !plan || !frecuency || !routine) {
        return res.status(404).send({ message: "Error al guardar rutina" })
    }

    const addRoutine = new Routine({
        user,
        plan,
        frecuency,
        typeRoutine: routine
    });
    addRoutine.save();
    return res.status(200).send({ message: "Rutina guardada correctamente" });
}

const deleteRoutine = async (req, res) => {
    await Routine.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) return res.status(500).send({ message: "Error del servidor" })
    });
    return res.status(200).send({ message: "Rutina eliminada correctamente" });
}

module.exports = {
    getRoutines,
    newRoutine,
    deleteRoutine
}