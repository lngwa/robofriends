import {CONSTANTS} from "./constants";

export const setSearchField = (text) => ({
	type: CONSTANTS.CHANGE_SEARCH_FIELD,
	payload: text
})