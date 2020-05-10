import * as ActionTypes from './ActionTypes';

export const Comments = (state = { loading:true, errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, loading:false, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, loading:false, errMess: action.payload};
    
    case ActionTypes.LOADING_DISHES:
    return {...state,loading:true, err:false, comments:[]};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};