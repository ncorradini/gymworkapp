import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const navbarClick = () => {
        const element = document.querySelector('.sidebar-mobile__items');
        element.classList.toggle('active');
    };

    return (
        <>
            {/* mobile navigation bar start */}
            <div className="sidebar-mobile">
                <div className="sidebar-mobile__icon" onClick={navbarClick}>
                    <i className="fa fa-bars sidebar-mobile__icon--btn"></i>
                </div>
                <div className="sidebar-mobile__items">
                    <Link to="/usuario"><i className="fas fa-home"></i><span>Inicio</span></Link>
                    <Link to="/usuario/planes"><i className="fas fa-paste"></i><span>Mis planes</span></Link>
                    <Link to="/usuario/nuevo-plan"><i className="fas fa-plus-circle"></i><span>Crear nuevo</span></Link>
                    <Link to="/usuario/ejercicios"><i className="fas fa-dumbbell"></i><span>Ejercicios</span></Link>
                </div>
            </div>
            {/* mobile navigation bar end */}
        
            {/* desktop navigation bar start */}
            <div className="sidebar">
                <Link to="/usuario"><i className="fas fa-home"></i><span>Inicio</span></Link>
                <Link to="/usuario/planes"><i className="fas fa-paste"></i><span>Mis planes</span></Link>
                <Link to="/usuario/nuevo-plan"><i className="fas fa-plus-circle"></i><span>Crear nuevo</span></Link>
                <Link to="/usuario/ejercicios"><i className="fas fa-dumbbell"></i><span>Ejercicios</span></Link>
            </div>
            {/* desktop navigation bar end */}
        </>
    )
}

export default Sidebar;
