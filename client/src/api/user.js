import { basePath } from './config';

export const signUpApi = async data => {
    const url = `${basePath}/signup`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    }

    try {
        const response = await fetch(url, params);
        const result = await response.json();
        
        if(response.status !== 200) return result;

        return true;
    } catch (err) {
        return err.message;
    }
}

export const signInApi = async data => {
    const url = `${basePath}/signin`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    }

    try {
        const response = await fetch(url, params);
        const result = await response.json();

        return result; 
    } catch (err) {
        return err.message;
    }
}