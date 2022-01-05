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
                <h4>Cuadriceps</h4>
                <select id={`${frecuency}-quadriceps-two`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'quadriceps'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Isquios</h4>
                <select id={`${frecuency}-hamstrings-two`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'hamstrings'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Gemelos</h4>
                <select id={`${frecuency}-twins-two`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'twins'))}
                </select>
            </div>
        </div>
    )
}

export default DayTwo;

