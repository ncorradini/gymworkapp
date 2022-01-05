import './NewPlan.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { messageNotification } from '../../../../utils/messageNotification';

// Routines 
import Fullbody from './routines/Fullbody';
import Hybrid from './routines/Hybrid';
import PullLeg from './routines/PullLeg';
import { saveRoutine } from '../../../../api/routine';
import { getExercises } from '../../../../api/exercise';

const NewPlan = ({user}) => {
  let navigate = useNavigate();

  const [routine, setRoutine] = useState();
  const [frecuency, setFrecuency] = useState(1);
  const [exercises, setExercises] = useState([]);

  const selectRoutine = e => {
    if(e.target.id !== '') {
      setRoutine(e.target.id);
    }
  }

  const definedFrecuency = plan => {
    if (frecuency === 1) return plan[frecuency];
    if (frecuency === 2) return [plan[frecuency - 1], plan[frecuency]];
    if (frecuency === 3) return [plan[frecuency - 2], plan[frecuency - 1], plan[frecuency]];
  }

  const selectedFrecuency = e => {
    const fatherElement = e.target.parentNode;

    for (let i = 0; i < fatherElement.children.length; i++) {
      fatherElement.children[i].classList.remove('active');
    }

    setFrecuency(+e.target.id)

    if (e.target.id === '1' || e.target.id === '2' || e.target.id === '3') {
      e.target.classList.toggle('active');
    }
  }

  const selectedExercise = (e, plan, setPlan) => {
    const cut = e.target.id.split('-');
    const frecuency = +cut[0];
    const muscle = cut[1];
    const day = cut[2];

    setPlan({
      ...plan,
      [frecuency]: { ...plan[frecuency], [day]: { ...plan[frecuency][day], [muscle]: e.target.value } }
    })
  };

  const createPlan = async planSelected => {
    const plan = definedFrecuency(planSelected);
    const body = { plan, frecuency, routine, user: user.id }
    const result = await saveRoutine(body);
  
    if(result !== true) return messageNotification(result.message, 'error');

    if(result) {
      messageNotification('¡Rutina creada correctamente!', 'success');
      setTimeout(() => {
        navigate('/usuario/planes')
      }, 1000);
    }
  };

  const buttonActive = id => {
    if (id === frecuency) return 'active';
  };

  const optionRender = (exercise, muscle) => {
    if (exercise.muscle === muscle) {
        return <option key={exercise._id}>{exercise.exercise}</option>
    }
  }

  // Required for routine components 
  const required = {
    frecuency,
    setFrecuency,
    selectedFrecuency,
    buttonActive,
    optionRender,
    selectedExercise,
    createPlan,
    exercises,
  }

  const render = {
    "hybrid": <Hybrid required={required} />,
    "pull_leg": <PullLeg required={required} />,
    "fullbody": <Fullbody required={required} />
  }

  useEffect(() => {
      (async function () {
          setExercises(await getExercises());
      })();
  }, [exercises]);

  return (
    <div className="newplan">
      <h1 className="newplan__title">Crea un nuevo plan</h1>
      <h3 className="newplan__description">Seleccione que tipo de rutina desea:</h3>

      <div onClick={selectRoutine} className="newplan__selection">
        <button id="fullbody">Fullbody</button>
        <button id="pull_leg">Torso / Pierna</button>
        <button id="hybrid">Híbrida</button>
      </div>

      {render[routine]}

      <ToastContainer />
    </div>
  );
}

export default NewPlan;
