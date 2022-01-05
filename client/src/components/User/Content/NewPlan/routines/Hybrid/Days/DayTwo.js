const DayTwo = (props) => {
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
                <h4>Espalda</h4>
                <select id={`${frecuency}-back-two`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'back'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Espalda</h4>
                <select id={`${frecuency}-backtwo-two`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'back'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Biceps</h4>
                <select id={`${frecuency}-biceps-two`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'biceps'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Biceps</h4>
                <select id={`${frecuency}-bicepstwo-two`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'biceps'))}
                </select>
            </div>
        </div>
    )
}

export default DayTwo;