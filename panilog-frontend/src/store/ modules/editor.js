import { createAction, handleActions} from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

//액션타입설정 ActionType initialize, change_input 
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

//액션생성 Action
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);


//초기화 initialState
const initialState = Map({
    title: '',
    markdown: '',
    tags: ''
  });

//리듀서
export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
      const { name, value } = action.payload;
      return state.set(name, value);
    }
  }, initialState)