import {createSelector} from 'reselect';

const selectState=state=>state.directory;

export const selectDirectory=createSelector(
	[selectState],
	directory=>directory.sections
	)