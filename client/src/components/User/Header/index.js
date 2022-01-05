import './Header.scss';
import { logout } from '../../../api/auth';

const Header = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <header className="header-user">
                <label for="check">
                    <i className="fas fa-bars" id="sidebar_btn"></i>
                </label>
                <div className="header-user__left_area">
                    <h3>GYM<span>WORK</span>APP</h3>
                </div>
                <div className="header-user__right_area">
                    <button
                        onClick={() => {
                            logout();
                            window.location.reload(true);
                        }} 
                        className="header-user__right_area--logout"
                    >Cerrar Sesión</button>
                </div>
            </header>
        </>
    )
}

export default Header;
