import './ItWorkSection.scss';
import tutorial from '../../../../img/png/tutorial.png';
import { useNavigate } from 'react-router';

const ItWorkSection = () => {
    let navigate = useNavigate();

    return (
        <section id="itwork" className="homepage">
            <div className="itwork-section">
                <div className="itwork-section__container">
                    <h2 className="itwork-section__title">
                        <span>¿</span><strong>Cómo</strong> funciona<span>?</span>
                    </h2>
                    <p className="itwork-section__text">Solo deberás registrarte en la sección de “registro”,
                        luego iniciar sesión y comenzar a disfrutar de todas
                        las funcionalidades de esta web-app.
                    </p>
                    <h4 className="itwork-section__text">Todo tipo de planes:</h4>
                    <ul className="itwork-section__list">
                        <li>Full body</li>
                        <li>Torso Pierna</li>
                        <li>Hibrídas</li>
                    </ul>
                    <p className="itwork-section__text">Podrás elegir la frecuencia que necesites.
                        <br /> Con niveles que van del 1 al 3.</p>
                    <div className="itwork-section__button--container">
                        <button 
                            onClick={() => navigate('/registro')}
                            className="itwork-section__button"
                        >Registrarme</button>
                    </div>
                </div>
                <img src={tutorial} className="itwork-section__img" />
            </div>
        </section>
    )
}

export default ItWorkSection;
