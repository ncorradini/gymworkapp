import './FirstPage.scss';
import { useNavigate } from 'react-router-dom';

const FirstPage = ({ user }) => {
    let navigate = useNavigate();

    return (
        <div className="first-page">
            <h3 className="first-page__title">Bienvenido <span>{user.username}</span></h3>
            <p className="first-page__text">
                Ya estás listo para comenzar a disfrutar de todas las funcionalidades de GymWorkApp.
            </p>
            <button
                className="first-page__button"
                onClick={() => navigate('/usuario/nuevo-plan')}
            >Crear plan</button>
             <button
                className="first-page__button"
                onClick={() => navigate('/usuario/planes')}
            >Ver planes</button>
        </div>
    )
}

export default FirstPage;
