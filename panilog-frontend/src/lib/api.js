import axios from 'axios';

export const writePost = ({title, body, tags}) => axios.post('/posts/write',{title, body, tags});