import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const GET_POST_LIST = 'list/GET_POST_LIST';

// action creators
export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta => meta);

// initial state
const initialState = Map({
    posts: List(),
    lastPage:null
});

// reducer
export default handleActions({
    //다수의 데이터를받아와 각각매핑할때 pender사용 
    ...pender({
       type: GET_POST_LIST,
      onSuccess: (state, action) => {
        const { data: posts } = action.payload;
        const lastPage = action.payload.headers['last-page'];

        return state.set('posts', fromJS(posts))
                    .set('lastPage', parseInt(lastPage, 10));
      } 
    })
}, initialState);