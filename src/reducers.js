import { CONSTANTS } from './constants';

const initialState = {
	searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
	switch(action.type){
		case CONSTANTS.CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;

	}
}