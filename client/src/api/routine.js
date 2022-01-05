import axios from 'axios';
import { basePath } from './config';

export const saveRoutine = async body => {
    try {
        const result = await axios.post(`${basePath}/routines`, body);
        if(result.status !== 200) return result;
        return true;
    } catch (err) { return err.message };
};

export const getRoutines = async id => {
    const data = await axios.get(`${basePath}/routines/${id}`);
    return data.data;
};

export const deleteRoutine = async id => {
   await axios.delete(`${basePath}/routines/${id}`);
};