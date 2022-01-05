import './MyPlans.scss';
import { useEffect, useState } from 'react';
import { getRoutines } from '../../../../api/routine';
import Routine from './Routine';
import { ToastContainer } from 'react-toastify';

const MyPlans = ({user}) => {
    const [routines, setRoutines] = useState([]);
    
    useEffect(() => {
        (async function(){
            setRoutines(await getRoutines(user.id));
        })();
    }, [routines]);
 
    return (
        <div className="myplans">
            {routines.length === 0
            ? <p className="myplans__not">Aún no has creado ningún plan</p>
            : null}

            {routines.map(routine => <Routine routine={routine} key={routine._id} />)}
            <ToastContainer />
        </div>
    )
}

export default MyPlans;
