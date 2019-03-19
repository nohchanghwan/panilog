import { createAction, handleActions} from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';


//초기화
// initialState는 리듀서의 초기상태를 설정하는과정
const initialState = Map({});

//reducer
export default handleActions({

}, initialState)
