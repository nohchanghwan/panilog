import axios from 'axios';

export const writePost = ({title, body, tags}) => axios.post('/posts/write',{title, body, tags});
export const getPost = (id) => axios.get(`/posts/detail/${id}`);
export const getPostList = ({tag,page}) => axios.get('/posts/?${queryString.stringify({tag,page})}');
//주의할점은 ' 이아닌 ` 라는점