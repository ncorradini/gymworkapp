import { useState } from 'react';
import { pull_leg } from '../initialStates';
import DayOne from './Days/DayOne';
import DayTwo from './Days/DayTwo';

const PullLeg = ({ required }) => {
    const { createPlan,
        selectedFrecuency,
        frecuency,
        optionRender,
        selectedExercise,
        buttonActive,
        exercises } = required;

    const [plan, setPlan] = useState(pull_leg);


    const dayOne = frec => <DayOne
        frecuency={frec}
        selectedExercise={selectedExercise}
        plan={plan} setPlan={setPlan}
        exercises={exercises}
        optionRender={optionRender}
    />;

    const dayTwo = frec => <DayTwo
        frecuency={frec}
        selectedExercise={selectedExercise}
        plan={plan} setPlan={setPlan}
        exercises={exercises}
        optionRender={optionRender}
    />;

    return (
        <div className="newplan__routine">
            <h4 className="newplan__routine-title">Torso / Pierna</h4>
            <p className="newplan__routine-selection">Seleccione la frecuencia:</p>
            <div onClick={selectedFrecuency} className="newplan__routine-selection">
                <button id="1" className={buttonActive(1)}>1</button>
                <button id="2" className={buttonActive(2)}>2</button>
                <button id="3" className={buttonActive(3)}>3</button>
            </div>

            <h3 className="newplan__routine__title-day">Día 1</h3>
            {dayOne(1)}
            <h3 className="newplan__routine__title-day">Día 2</h3>
            {dayTwo(1)}

            {
                frecuency === 1
                    ? null :
                    <>
                        <h3 className="newplan__routine__title-day">Día 3</h3>
                        {dayOne(2)}
                        <h3 className="newplan__routine__title-day">Día 4</h3>
                        {dayTwo(2)}
                    </>
            }

            {
                frecuency === 3 ?
                    <>
                        <h3 className="newplan__routine__title-day">Día 5</h3>
                        {dayOne(3)}
                        <h3 className="newplan__routine__title-day">Día 6</h3>
                        {dayTwo(3)}
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

export default PullLeg;