// CSS Files
import './SupportSection.scss';
import 'react-toastify/dist/ReactToastify.css';
// Utils
import { ToastContainer } from 'react-toastify';
import { messageNotification } from '../../../../utils/messageNotification';

const SupportSection = () => {
    return (
        <section id="support" className="support-section">
            <div className="support-section__container">
                <div className="support-section__data">
                    <h2 className="support-section__data--title">Soporte</h2>
                    <ul className="support-section__data--list">
                        <li>Tel.: 000-80808080</li>
                        <li>WhatsApp: +54 0353 - 150570420</li>
                        <li>Email: support@gymworkapp.com.ar</li>
                    </ul>
                </div>

                <form
                    onSubmit={e => {
                        e.preventDefault();
                        document.querySelector('form').reset();
                        messageNotification('¡Mensaje enviado correctamente!', 'success')
                    }}
                    className="support-section__form">
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        className="support-section__form--input"
                    />
                    <input
                        type="text"
                        placeholder="Correo electrónico"
                        className="support-section__form--input"
                    />
                    <textarea
                        className="support-section__form--msg"
                        placeholder="¿Qué problema tuvo?"
                    />
                    <input
                        type="submit"
                        className="support-section__form--button"
                    />
                    
                    <ToastContainer />
                </form>
            </div>
        </section>
    )
}

export default SupportSection;
