import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tthy-react-burger.firebaseio.com/'
});

export default instance;