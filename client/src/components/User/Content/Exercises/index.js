import './Exercises.scss';
import { useEffect, useState } from 'react';
import { getExercises } from '../../../../api/exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    const muscleTranslate = {
        'chest': 'Pecho',
        'back': 'Espalda',
        'shoulder': 'Hombros',
        'triceps': 'Triceps',
        'biceps': 'Biceps',
        'quadriceps': 'Cuadriceps',
        'hamstrings': 'Isquios',
        'twins': 'Gemelos'
    }

    useEffect(() => {
        (async function () {
            setExercises(await getExercises());
        })();
    }, [exercises]);

    return (
        <div className="exercises">
            {exercises.map(exercise => {

                // Render video if it exists
                const video = url => {
                    if (url) {
                        const splitLinkOne = url.split("&");
                        const splitLinkTwo = splitLinkOne[0].split('=');

                        return (<iframe
                            className="exercises__card-video"
                            src={`https://www.youtube.com/embed/${splitLinkTwo[1]}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>)
                    }

                    return <p>Sin video</p>
                }

                // Return card exercise
                return (
                    <div key={exercise._id} className="exercises__card">
                        <h4 className="exercises__card-title">{exercise.exercise}</h4>
                        <p className="exercises__card-description">
                            Músculo central: {muscleTranslate[exercise.muscle]}
                        </p>
                        {video(exercise.video)}
                    </div>
                )
            })}
        </div>
    )
}

export default Exercises
