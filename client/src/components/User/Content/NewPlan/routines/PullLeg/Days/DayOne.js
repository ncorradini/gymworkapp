const DayOne = (props) => {
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
                <select id={`${frecuency}-chest-one`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'chest'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Espalda</h4>
                <select id={`${frecuency}-back-one`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'back'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Hombros</h4>
                <select id={`${frecuency}-shoulder-one`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'shoulder'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Triceps</h4>
                <select id={`${frecuency}-triceps-one`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'triceps'))}
                </select>
            </div>
            <div className="newplan__routine--day__ejercise">
                <h4>Biceps</h4>
                <select id={`${frecuency}-biceps-one`} defaultValue="default" onChange={handleChange}>
                    <option value="default" disabled>Seleccione ejercicio</option>
                    {exercises.map(exercise => optionRender(exercise, 'biceps'))}
                </select>
            </div>
        </div>
    )
}

export default DayOne;
