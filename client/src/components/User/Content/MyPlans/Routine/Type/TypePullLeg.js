const TypePullLeg = ({ frecuency, routine, verifyExist }) => {
    
    if (frecuency === 1) {
        return (
            <div className="myplans__container-days">
                <h4>Día 1</h4>
                <p><strong>Pecho:</strong> {verifyExist(routine.one.chest, 10)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine.one.back, 10)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine.one.shoulder, 12)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine.one.triceps, 12)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine.one.biceps, 12)}</p>
                
                <h4>Día 2</h4>
                <p><strong>Cuadriceps:</strong> {verifyExist(routine.two.quadriceps, 12)}</p>
                <p><strong>Isquios:</strong> {verifyExist(routine.two.hamstrings, 12)}</p>
                <p><strong>Gemelos:</strong> {verifyExist(routine.two.twins, 20)}</p>
            </div>
        )
    }

    if (frecuency === 2 || frecuency === 3) {
        const calculateDay = day => {
            if(day === 0) return ['1', '2'];
            if(day === 1) return ['3', '4'];
            if(day === 2) return ['5', '6'];
        }

        const template = day => (
            <div className="myplans__container-days">
                <h4>Día {calculateDay(day)[0]}</h4>
                <p><strong>Pecho:</strong> {verifyExist(routine[day].one.chest, 10)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine[day].one.back, 10)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine[day].one.shoulder, 12)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine[day].one.triceps, 12)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine[day].one.biceps, 12)}</p>
               
                <h4>Día {calculateDay(day)[1]}</h4>
                <p><strong>Cuadriceps:</strong> {verifyExist(routine[day].two.quadriceps, 12)}</p>
                <p><strong>Isquios:</strong> {verifyExist(routine[day].two.hamstrings, 12)}</p>
                <p><strong>Gemelos:</strong> {verifyExist(routine[day].two.twins, 20)}</p>
            </div>
        )

        return (
            <>
                {template(0)}
                {template(1)}
                {frecuency === 3
                    ? template(2)
                    : null}
            </>
        )
    }
}

export default TypePullLeg;

