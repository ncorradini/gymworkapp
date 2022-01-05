const DayThree = (props) => {
    const { frecuency,
        selectedExercise,
        plan,
        setPlan,
        optionRender,
        exercises } = props;

    const handleChange = e => selectedExercise(e, plan, setPlan);

    return (
        <div className="newplan__routine--day">
            <div className="newplan__routine--day__ejercise">
                <h4>Pecho</h4>
                <select id={`${frecuency}-chest-three`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'chest'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Espalda</h4>
                <select id={`${frecuency}-back-three`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'back'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Hombros</h4>
                <select id={`${frecuency}-shoulder-three`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'shoulder'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Cuadriceps</h4>
                <select id={`${frecuency}-quadriceps-three`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'quadriceps'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Isquios</h4>
                <select id={`${frecuency}-hamstrings-three`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'hamstrings'))}
                </select>
            </div>
        </div>
    )
}

export default DayThree;