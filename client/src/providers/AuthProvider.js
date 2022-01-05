import { createContext } from 'react';
import {
    getAccessToken,
    getRefreshToken,
    refreshAccessToken,
    logout
} from '../api/auth';
import jwtDecode from 'jwt-decode';


export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;

    const checkUserLogin = () => {
        const accessToken = getAccessToken();

        if(!accessToken) {
            const refreshToken = getRefreshToken();
            if(!refreshToken) {
                logout();
                return null
            } else {
                 refreshAccessToken(refreshToken);
            }
        } else {
            return jwtDecode(accessToken)
        }
    }
    
    const user = checkUserLogin();

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
} 

export default AuthProvider;