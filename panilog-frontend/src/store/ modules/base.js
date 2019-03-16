import { createAction, handleActions} from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';


//초기화
const initialState = Map({});

//reducer
export default handleActions({

}, initialState)