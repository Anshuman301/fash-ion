import React from 'react';
import {connect} from 'react-redux';
import {countCartItems} from '../../redux/CartReducer/Cart.select';
import {ReactComponent as ShopBag} from '../../assets/shoping-bag.svg';
import './carticon.css';
import {actionCart} from '../../redux/CartReducer/ActionCart';

const CartIcon=({actionCart,totalQuantity})=>{
	return(
		<div onClick={actionCart} style={{cursor:"pointer"}}>
			<ShopBag className="bagcss"/>
			<span className="count-item">{totalQuantity}</span>
		</div>
	)
}
const mapDispatchToProps=dispatch=>({
	actionCart :()=>dispatch(actionCart())
})
const mapStateToProps=state => ({
	totalQuantity:countCartItems(state)
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);