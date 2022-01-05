// CSS files
import './Login.scss';
import 'react-toastify/dist/ReactToastify.css';
// React imports
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Utils
import { handleFocusForm } from '../../../utils/handleFocusForm';
import { ToastContainer } from 'react-toastify';
import { messageNotification } from '../../../utils/messageNotification';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../utils/constants';
import { signInApi } from '../../../api/user';

const Login = () => {
    const [inputs, setInputs] = useState({ email: '', password: '' });

    const handleChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault();

        if (!inputs.email || !inputs.password) {
            return messageNotification('¡Completa AMBOS campos para iniciar sesión!', 'error');
        }

        // User login request to the api
        const result = await signInApi(inputs);
        // Handling error
        if (result.message) return messageNotification(result.message, 'error');

        // Success login
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
       
        window.location.reload(true);
    }

    return (
        <div className="form-login">
            <form
                className="form-login__container"
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                <h2 className="form-login__title">Iniciar Sesión</h2>
                <div 
                    className="form-login__input" 
                    onFocus={handleFocusForm} 
                    onBlur={handleFocusForm}
                >
                    <i className="fas fa-user-circle form-login__input--icon"></i>
                    <input
                        className="form-login__input--text"
                        type="text"
                        placeholder="Correo electrónico"
                        name="email"
                    />
                </div>
                <div className="form-login__input"
                    onFocus={handleFocusForm} 
                    onBlur={handleFocusForm}
                >
                    <i className="fas fa-lock form-login__input--icon"></i>
                    <input
                        className="form-login__input--text"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                    />
                </div>

                <input
                    className="form-login__input--submit"
                    type="submit"
                    value="Ingresar"
                />

                <Link
                    className="form-login__redirect"
                    to="/registro"
                >¿No tienes cuenta? Registrate</Link>

                <ToastContainer />
            </form>
        </div>
    )
}

export default Login;