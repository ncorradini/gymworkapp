const TypeHybrid = ({ frecuency, routine, verifyExist }) => {
    if (frecuency === 1) {
        return (
            <div className="myplans__container-days">
                <h4>Día 1</h4>
                <p><strong>Pecho:</strong> {verifyExist(routine.one.chest, 5)}</p>
                <p><strong>Pecho:</strong> {verifyExist(routine.one.chesttwo, 10)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine.one.shoulder, 12)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine.one.triceps, 8)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine.one.tricepstwo, 15)}</p>
                
                <h4>Día 2</h4>
                <p><strong>Espalda:</strong> {verifyExist(routine.two.back, 5)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine.two.backtwo, 10)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine.one.biceps, 8)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine.one.bicepstwo, 15)}</p>
                
                <h4>Día 3</h4>
                <p><strong>Pecho:</strong> {verifyExist(routine.three.chest, 10)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine.three.back, 10)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine.three.shoulder, 12)}</p>
                <p><strong>Cuadriceps:</strong> {verifyExist(routine.three.quadriceps, 12)}</p>
                <p><strong>Isquios:</strong> {verifyExist(routine.three.hamstrings, 12)}</p>
            </div>
        )
    }

    if (frecuency === 2) {
        const template = day => (
            <div className="myplans__container-days">
                <h4>Día {day === 0 ? '1' : '4'}</h4>
                <p><strong>Pecho:</strong> {verifyExist(routine[day].one.chest, 5)}</p>
                <p><strong>Pecho:</strong> {verifyExist(routine[day].one.chesttwo, 10)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine[day].one.shoulder, 12)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine[day].one.triceps, 8)}</p>
                <p><strong>Triceps:</strong> {verifyExist(routine[day].one.tricepstwo, 15)}</p>
               
                <h4>Día {day === 0 ? '2' : '5'}</h4>
                <p><strong>Espalda:</strong> {verifyExist(routine[day].two.back, 5)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine[day].two.backtwo, 10)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine[day].one.biceps, 8)}</p>
                <p><strong>Biceps:</strong> {verifyExist(routine[day].one.bicepstwo, 15)}</p>
               
                <h4>Día {day === 0 ? '3' : '6'}</h4>
                <p><strong>Pecho:</strong> {verifyExist(routine[day].three.chest, 10)}</p>
                <p><strong>Espalda:</strong> {verifyExist(routine[day].three.back, 10)}</p>
                <p><strong>Hombros:</strong> {verifyExist(routine[day].three.shoulder, 12)}</p>
                <p><strong>Cuadriceps:</strong> {verifyExist(routine[day].three.quadriceps, 12)}</p>
                <p><strong>Isquios:</strong> {verifyExist(routine[day].three.hamstrings, 12)}</p>
            </div>
        )

        return (
            <>
                {template(0)}
                {template(1)}
            </>
        )
    }
}

export default TypeHybrid;