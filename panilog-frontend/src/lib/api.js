import axios from 'axios';

export const writePost = ({title, body, tags}) => axios.post('/posts/write',{title, body, tags});
export const getPost = (id) => axios.get(`/posts/detail/${id}`);
//주의할점은 ' 이아닌 ` 라는점