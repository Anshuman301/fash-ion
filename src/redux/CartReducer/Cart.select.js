import { createSelector } from 'reselect';

const selectState = state => state.cart;

export const selectCartState = createSelector(
	[selectState],
	cart => cart.cartitems
	)
export const selectHidden = createSelector(
	[selectState],
	cart=>cart.hidden
	)
export const countCartItems = createSelector(
	[selectCartState],
	cartitems =>cartitems.reduce((acc,it)=>{
		return acc + it.quantity
		},0)
	)
export const sumCartItems = createSelector(
	[selectCartState],
	cartitems => cartitems.reduce((acc,it)=>{
		return acc + it.price * it.quantity
	},0)
	)