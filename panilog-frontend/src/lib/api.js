import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({title, body, tags}) => axios.post('/posts/write',{title, body, tags});
export const getPost = (id) => axios.get(`/posts/detail/${id}`);
export const getPostList = ({tag,page}) => axios.get(`/main?${queryString.stringify({tag,page})}`);
//export const getPostList = () => axios.get(`/`);

//주의할점은 ' 이아닌 ` 라는점