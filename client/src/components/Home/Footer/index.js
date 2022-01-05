import './Footer.scss';
import logo from '../../../img/png/logo.png';

const Footer = () => {
    return (
        <footer className="footer-home">
            <div className="footer-home__container">
                <ul className="footer-home__menu">
                    <li><a className="footer-home__menu-item" href="#home">Inicio</a></li>
                    <li><a className="footer-home__menu-item" href="#itwork">¿Cómo funciona?</a></li>
                    <li><a className="footer-home__menu-item" href="#support">Soporte</a></li>
                </ul>
                <div className="footer-home__firm">
                    <p>Web App
                        <br />Diseñada y programada por:
                        <br />Corradini Nicolás - 2021
                    </p>
                </div>
                <img src={logo} className="footer-home__logo" />
            </div>
        </footer>
    )
}

export default Footer;
