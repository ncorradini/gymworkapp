import { useState } from 'react';
import DayOne from './Days/DayOne';
import DayTwo from './Days/DayTwo';
import DayThree from './Days/DayThree';
import { hybrid } from '../initialStates';

const Hybrid = ({ required }) => {
    const { createPlan,
        selectedFrecuency,
        frecuency,
        optionRender,
        selectedExercise,
        buttonActive,
        exercises,
        setFrecuency } = required;

    const [plan, setPlan] = useState(hybrid);

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

    const dayThree = frec => <DayThree
        frecuency={frec}
        selectedExercise={selectedExercise}
        plan={plan} setPlan={setPlan}
        exercises={exercises}
        optionRender={optionRender}
    />;

    return (
        <div className="newplan__routine">
            <h4 className="newplan__routine-title">Híbrida</h4>
            <p className="newplan__routine-selection">Seleccione la frecuencia:</p>
            <div onClick={selectedFrecuency} className="newplan__routine-selection">
                <button id="1" className={buttonActive(1)}>1</button>
                {frecuency !== 3
                    ? <button id="2" className={buttonActive(2)}>2</button>
                    : setFrecuency(2)}
            </div>

            <h3 className="newplan__routine__title-day">Día 1</h3>
            {dayOne(1)}
            <h3 className="newplan__routine__title-day">Día 2</h3>
            {dayTwo(1)}
            <h3 className="newplan__routine__title-day">Día 3</h3>
            {dayThree(1)}

            {
                frecuency === 1
                    ? null
                    : <>
                        <h3 className="newplan__routine__title-day">Día 4</h3>
                        {dayOne(2)}
                        <h3 className="newplan__routine__title-day">Día 5</h3>
                        {dayTwo(2)}
                        <h3 className="newplan__routine__title-day">Día 6</h3>
                        {dayThree(2)}
                    </>
            }

            <button
                className="newplan__routine--create"
                onClick={() => createPlan(plan)}
            >Crear plan</button>

        </div>
    )
}

export default Hybrid;