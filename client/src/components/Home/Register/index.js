// CSS Files
import './Register.scss';
import 'react-toastify/dist/ReactToastify.css';
// React imports
import { useState } from 'react';
import { useNavigate } from 'react-router';
// Utils
import { handleFocusForm } from '../../../utils/handleFocusForm';
import { ToastContainer } from 'react-toastify';
import { signUpApi } from '../../../api/user';
import { messageNotification } from '../../../utils/messageNotification';

const Register = () => {
    let navigate = useNavigate();

    const initialState = {
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    };

    const [inputs, setInputs] = useState(initialState);

    const handleChange = e => {
        if (e.target.name !== 'privacyPolicy') {
            setInputs({ ...inputs, [e.target.name]: e.target.value })
        }
    }

    const handleCheckbox = () => {
        setInputs({ ...inputs, privacyPolicy: !inputs.privacyPolicy })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if (!inputs.email || !inputs.password || !inputs.repeatPassword || !inputs.privacyPolicy) {
            return messageNotification('¡TODOS los campos son obligatorios!', 'error');
        }

        if (inputs.password.length < 6 || inputs.repeatPassword.length < 6) {
            return messageNotification('¡Las CONTRASEÑAS deben tener al menos 6 caracteres!', 'error');
        }

        if (inputs.password !== inputs.repeatPassword) {
            return messageNotification('¡Las contraseñas NO COINCIDEN!', 'error');
        }

        const result = await signUpApi(inputs);
        
        if(result !== true) return messageNotification(result.message, 'error');

        if (result) {
            messageNotification('¡Usuario registrado correctamente!', 'success')
            e.target.reset();
            setInputs(initialState);
            setTimeout(() => {
                navigate('/ingreso');
            }, 2000)
        }
    }

    return (
        <div className="form-register">
            <form 
                className="form-register__container"
                onChange={handleChange} 
                onSubmit={handleSubmit}
            >
                <h2 className="form-register__title">Registrarse</h2>
                <div 
                    className="form-register__input"
                    onFocus={handleFocusForm} 
                    onBlur={handleFocusForm}
                >
                    <i className="fas fa-user-plus form-register__input--icon"></i>
                    <input
                        className="form-register__input--text"
                        type="text"
                        placeholder="Nombre de usuario"
                        name="username"
                    />
                </div>

                <div 
                    className="form-register__input"
                    onFocus={handleFocusForm} 
                    onBlur={handleFocusForm}
                >
                    <i className="fas fa-user-circle form-register__input--icon"></i>
                    <input
                        className="form-register__input--text"
                        type="text"
                        placeholder="Correo electrónico"
                        name="email"
                    />
                </div>

                <div
                    className="form-register__input"
                    onFocus={handleFocusForm} 
                    onBlur={handleFocusForm}
                >
                    <i className="fas fa-key form-register__input--icon"></i>
                    <input
                        className="form-register__input--text"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                    />
                </div>

                <div 
                    className="form-register__input"
                    onFocus={handleFocusForm} 
                    onBlur={handleFocusForm}
                >
                    <i className="fas fa-key form-register__input--icon"></i>
                    <input
                        className="form-register__input--text"
                        type="password"
                        placeholder="Repetir contraseña"
                        name="repeatPassword"
                    />
                </div>

                <span className="checkbox form-register__check">
                    <input
                        className="checkbox form-register__check--input"
                        type="checkbox"
                        name="privacyPolicy"
                        onClick={handleCheckbox}
                    />
                    <p className="checkbox form-register__check--text">He leído y acepto las políticas de privacidad</p>
                </span>

                <input type="submit" value="Crear cuenta" className="form-register__input--submit"/>

                <ToastContainer />
            </form>
        </div>
    )
}

export default Register;
