export const actionCart=()=>({
	type:"SET_CART_HIDDEN",
});

export const actionAdditem=(item)=>({
	type:"ADD_ITEM",
	payload:item
})

export const actionRemoveItem=(item)=>({
	type:"REMOVE_ITEM",
	payload:item
})

export const actionRemoveOne = (item) =>({
	type:"REMOVE_ONE",
	payload:item
})