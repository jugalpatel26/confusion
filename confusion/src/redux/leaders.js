import * as ActionTypes from './ActionTypes';

export const Leaders = function(state={
	loading:true,
	err:false,
	leaders:[]
},action){
	switch(action.type){
		case ActionTypes.ADD_LEADERS:
			return {...state,loading:false, err:false, leaders:action.payload};
		case ActionTypes.LOADING_LEADERS:
			return {...state,loading:true, err:false, leaders:[]};
		case ActionTypes.LEADERS_FAILED:
			return {...state,loading:false, err:action.payload, leaders:[]};
		default:
			return state;
	}

}