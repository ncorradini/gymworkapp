const TypeFullbody = ({ frecuency, routine, verifyExist }) => {
    
    if (frecuency === 1) {
        return (
            <div className="myplans__container-days">
                <h4>Día 1</h4>
                <p><strong>Cuadriceps:</strong> {verifyExist(routine.one.quadriceps, 12)}</p>
                <p><strong>Pecho:</strong> {verifyExist(routine.one.chest, 12)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine.one.back, 12)}</p>
                <p><strong>Isquios:</strong> {verifyExist(routine.one.hamstrings, 12)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine.one.shoulder, 12)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine.one.triceps, 12)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine.one.biceps, 12)}</p>
            </div>
        )
    }

    if (frecuency === 2 || frecuency === 3) {
        const template = day => (
            <div className="myplans__container-days">
                <p><strong>Cuadriceps:</strong> {verifyExist(routine[day].one.quadriceps, 12)}</p>
                <p><strong>Pecho:</strong> {verifyExist(routine[day].one.chest, 12)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine[day].one.back, 12)}</p>
                <p><strong>Isquios:</strong> {verifyExist(routine[day].one.hamstrings, 12)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine[day].one.shoulder, 12)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine[day].one.triceps, 12)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine[day].one.biceps, 12)}</p>
            </div>
        )

        return (
            <div className="myplans__container-days">
                <h4>Día 1</h4>
                {template(0)}
                <h4>Día 2</h4>
                {template(1)}
                {frecuency === 3
                    ? <> <h4>Día 3</h4> {template(2)} </>
                    : null}
            </div>
        )
    }

}

export default TypeFullbody;