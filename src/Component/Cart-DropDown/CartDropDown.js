import React from 'react';
import CustomButton from '../Custom-button/CustomButton';
import './cartdropdown.css';
const CartDropDown=()=>{
	return(
		<div className="cartdrop">
			<div className="cartitem"/>
			<div className="button">
			<CustomButton >go to checkout</CustomButton>
			</div>
		</div>
	)
}
export default CartDropDown;