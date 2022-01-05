import TypeFullbody from './Type/TypeFullbody';
import TypePullLeg from './Type/TypePullLeg';
import TypeHybrid from './Type/TypeHybrid';
import { deleteRoutine } from '../../../../../api/routine';
import { messageNotification } from '../../../../../utils/messageNotification';

const Routine = ({ routine }) => {

    const verifyExist = (exercise, reps) => {
        if (exercise) return `${exercise} 3x${reps}`;
        return 'Ejercicio no seleccionado'
    }

    const renderRoutine = {
        fullbody: <TypeFullbody
            frecuency={routine.frecuency}
            routine={routine.plan}
            verifyExist={verifyExist}
        />,
        pull_leg: <TypePullLeg
            frecuency={routine.frecuency}
            routine={routine.plan}
            verifyExist={verifyExist}
        />,
        hybrid: <TypeHybrid
            frecuency={routine.frecuency}
            routine={routine.plan}
            verifyExist={verifyExist}
        />
    };

    const type = {
        fullbody: 'Fullbody',
        pull_leg: 'Torso / Pierna',
        hybrid: 'Híbrida'
    }

    const deleted = e => {
        if(window.confirm('Seguro deseas borrar este plan?')) {
            messageNotification('¡Plan eliminado correctamente!', 'success');
            const fatherElement = e.target.parentElement.parentElement;
            deleteRoutine(fatherElement.id);
        };
    }

    return (
        <div className="myplans__container" id={routine._id}>
            <div className="myplans__container-title">
                <h2>{type[routine.typeRoutine]}</h2>
                <i className="fas fa-trash-alt" onClick={deleted}></i>
            </div>
            <h3 className="myplans__container-description">Frecuencia: {routine.frecuency}</h3>
            {renderRoutine[routine.typeRoutine]}
        </div>
    )
}

export default Routine;
