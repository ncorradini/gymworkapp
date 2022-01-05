import { basePath } from './config';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../utils/constants';
import jwtDecode from 'jwt-decode';

export const getAccessToken = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken || accessToken === null) return null;

    return willExpireToken(accessToken) ? null : accessToken
}

export const getRefreshToken = () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshToken || refreshToken === null) return null;

    return willExpireToken(refreshToken) ? null : refreshToken
}

export const refreshAccessToken = async receivedToken => {
    const url = `${basePath}/refresh-access-token`;
    const bodyObj = { refreshToken: receivedToken };
    const params = {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: { 'Content-Type': 'application/json' }
    }

    const response = await fetch(url, params);

    if (response.status !== 200) return null;

    const result = await response.json();

    if (!result) { 
        logout() 
        return window.location.reload(true) 
    };

    const { accessToken, refreshToken } = result
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);

    return jwtDecode(accessToken);
}

export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

export const willExpireToken = token => {
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;

    return now > exp
}
