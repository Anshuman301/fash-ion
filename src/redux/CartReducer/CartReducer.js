const init={
	hidden:true
}

const CartReducer=(state=init,action)=>{
	switch(action.type){
		case "SET_CART_HIDDEN" :
			return {...state,hidden:!state.hidden}
		default:
			return state;
	}
}

export default CartReducer;  