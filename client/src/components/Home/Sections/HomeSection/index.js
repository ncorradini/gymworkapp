import './HomeSection.scss';
import persons from '../../../../img/png/persons.png';
import { useNavigate } from 'react-router';

const HomeSection = () => {
    let navigate = useNavigate();

    return (
        <section id="home" className="homepage">
            <div className="home-section">
                <div className="home-section__container">
                    <h1 className="home-section__title">
                        GENERÁ TUS PLANES
                        <br />
                        <span><strong>100%</strong> PERSONALIZADOS</span>
                    </h1>
                    <p className="home-section__text"><strong>GymWorkApp</strong> permite crear planes ilimitados de entrenamiento.
                        De todos los tipos, frecuencia y volumen.</p>
                    <button
                        onClick={() => navigate('/registro')} 
                        className="home-section__button"
                    >Comenzar</button>
                </div>
                <img src={persons} className="home-section__img" />
            </div>
        </section>
    )
}

export default HomeSection;
