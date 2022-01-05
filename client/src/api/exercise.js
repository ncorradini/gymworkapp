import axios from 'axios';
import { basePath } from './config';

export const getExercises = async () => {
    const data = await axios.get(`${basePath}/exercises`);
    return data.data;
}
