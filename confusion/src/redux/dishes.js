import * as ActionTypes from './ActionTypes';


export const Dishes = function(state={
	loading:true,
	err:false,
	dishes:[]
},action){
	console.log("dishreducer");
	switch(action.type){
		case ActionTypes.ADD_DISHES:
			return {...state,loading:false, err:false, dishes:action.payload};
		case ActionTypes.LOADING_DISHES:
			return {...state,loading:true, err:false, dishes:[]};
		case ActionTypes.LOADERR_DISHES:
			return {...state,loading:false, err:action.payload, dishes:[]};
		default:
			return state;
	}
}