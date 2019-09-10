import {createSelector} from 'reselect';

const selectState=state=>state.collection

export const selectCollection=createSelector(
	[selectState],
	collection=>collection.shopdata);
export const changeSelectCollection = createSelector(
	[selectCollection],
	collection=>Object.keys(collection).map(key=>collection[key]))
export const newSelectCollection = param=>createSelector(
	[selectCollection],
	collection => collection[param]
	)