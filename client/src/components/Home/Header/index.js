import './Header.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();
    let location = useLocation();

    const menuClick = e => {
        if(location.pathname !== "/") navigate('/');
    }

    return (
        <div className="header-home__background">
            <nav className="header-home">
                <Link to="/" className="header-home__logo">GYM<span>WORK</span>APP</Link>
                <ul 
                    onClick={menuClick}
                    className="header-home__menu"
                >
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#itwork">¿Cómo funciona?</a></li>
                    <li><a href="#support">Soporte</a></li>
                </ul>
                <div className="header-home__login">
                    <button
                        onClick={() => navigate("/registro")}  
                        className="header-home__login--inactive"
                    >Registrarse</button>
                    <button
                        onClick={() => navigate("/ingreso")} 
                        className="header-home__login--active"
                    >Ingresar</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
