import {addCartitem,removeCartOne,removeCartItem} from './Cartitem.utils.js';
const init={
	hidden:true,
	cartitems:[]
}

const CartReducer=(state=init,action)=>{
	switch(action.type){
		case "SET_CART_HIDDEN" :
			return {...state,hidden:!state.hidden}
		case "ADD_ITEM" :
			return {...state,cartitems:addCartitem(state.cartitems,action.payload)}
		case "REMOVE_ITEM" :
			return {...state,cartitems:removeCartItem(state.cartitems,action.payload)}
		case "REMOVE_ONE" :
			return {...state,cartitems:removeCartOne(state.cartitems,action.payload)}
		default:
			return state;
	}
}

export default CartReducer;  