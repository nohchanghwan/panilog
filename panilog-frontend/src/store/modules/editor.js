import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
//api추가
import * as api from 'lib/api';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
  //api action
const WRITE_POST = 'editor/WRITE_POST'; 



// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
  //api action lib/api에 만들어놓은 api선언들과연결
export const writePost = createAction(WRITE_POST, api.writePost); 

// initial state
const initialState = Map({
  title: '',
  markdown: '',
  tags: '',
  postId: null
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
  //API요청 성공했을때 서버에서응답하는 id값을 받아와 
  //리덕스모듈에서 사용하는 상태의 postId값에 넣는다
  ...pender({
    type: WRITE_POST,
    onSuccess: (state, action) => {
      const { id } = action.payload.data;
      return state.set('postId', id);
    }
  }),
}, initialState)
