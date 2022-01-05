import { useState } from 'react';
import { fullbody } from '../initialStates';
import Day from './Day';

const Fullbody = ({ required }) => {
    const { createPlan,
        selectedFrecuency,
        frecuency,
        optionRender,
        selectedExercise,
        buttonActive,
        exercises } = required;

    const [plan, setPlan] = useState(fullbody);

    const day = frec => <Day
        frecuency={frec}
        selectedExercise={selectedExercise}
        plan={plan} setPlan={setPlan}
        exercises={exercises}
        optionRender={optionRender}
    />;

    return (
        <div className="newplan__routine">
            <h4 className="newplan__routine-title">Fullbody</h4>
            <p className="newplan__routine-selection">Seleccione la frecuencia:</p>
            <div onClick={selectedFrecuency} className="newplan__routine-selection">
                <button id="1" className={buttonActive(1)}>1</button>
                <button id="2" className={buttonActive(2)}>2</button>
                <button id="3" className={buttonActive(3)}>3</button>
            </div>

            <h3 className="newplan__routine__title-day">Día 1</h3>
            {day(1)}

            {
                frecuency === 1
                    ? null :
                    <>
                        <h3 className="newplan__routine__title-day">Día 2</h3>
                        {day(2)}
                    </>
            }

            {
                frecuency === 3 ?
                    <>
                        <h3 className="newplan__routine__title-day">Día 3</h3>
                        {day(3)}
                    </>
                    : null
            }

            <button
                className="newplan__routine--create"
                onClick={() => createPlan(plan)}
            >Crear plan</button>

        </div>
    )
}

export default Fullbody;