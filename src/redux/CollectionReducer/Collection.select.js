import {createSelector} from 'reselect';

const selectState=state=>state.collection

export const selectCollection=createSelector(
	[selectState],
	collection=>collection.shopdata);
export const newSelectCollection = param=>createSelector(
	[selectCollection],
	collection => collection.find(category=>category.routeName===param))