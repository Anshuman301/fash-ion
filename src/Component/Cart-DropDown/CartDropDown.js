import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectCartState} from '../../redux/CartReducer/Cart.select'
import {actionCart} from '../../redux/CartReducer/ActionCart';
import CustomButton from '../Custom-button/CustomButton';
import CartItem from '../CartItem/CartItem';
import './cartdropdown.css';
const CartDropDown=({cartitems,history,dispatch})=>{
	return(
		<div className="cartdrop">
			<div className="cartitem">
			 {	
			 	cartitems.length ?
			 	(
			 		cartitems.map(({...otherProps},idx)=>(
					<div className="itemcss" key={idx}>
					<CartItem {...otherProps}/>
					</div>
					))
			 	)
			 	:
			 	(
			 		<span className="empty">Your cart is empty</span>
			 	)
			 }
			 </div>
			<div className="button">
				<CustomButton onClick={()=>{
					history.push('/checkout');
					dispatch(actionCart()); 
				}}>
					go to checkout
				</CustomButton>
			</div>
		</div>
	)
}
const mapStateToProps=createStructuredSelector({
	cartitems:selectCartState
})

export default withRouter(connect(mapStateToProps)(CartDropDown));