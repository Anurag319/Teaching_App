import axios from 'axios';

const URL = 'http://localhost:8000';

export const authenticateSignup = async(data) => {
    try {
        console.log('authenicatesignup');
        return await axios.post(`${URL}/signup`,data);
    } catch (error) {
        console.log('Error while calling signup api service/api', error)
    }
}

export const authenticateLogin = async(data) => {
    try {
        return await axios.post(`${URL}/login`,data);
    } catch (error) {
        console.log('Error while calling login api service/api', error);
        return error.response;
    }
}


export const studentsquiz = async(data) => {
    try {
        console.log('student data - ' + JSON.stringify(data));
        return await axios.get(`${URL}/students/${data.username}`);
    } catch (error) {
        console.log('Error while calling studentsquiz api service/api', error);
    }
}


export const studentsquizpost= async(data) => {
    try {
        console.log('student post data - ' + JSON.stringify(data));
        return await axios.post(`${URL}/students`,data);
    } catch (error) {
        console.log('Error while calling studentsquiz api service/api', error);
    }
}
