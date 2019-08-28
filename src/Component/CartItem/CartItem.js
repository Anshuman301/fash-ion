import React from 'react';
import './cartitem.css';
const CartItem =({imageUrl,name,price,quantity}) => {
	return(
		<div className="item">
			<div>
				<img src={`${imageUrl}`} width="auto" height="100px" alt={name}/>
			</div>
			<div className="details">
				<span>{name}</span>
				<span>{`${quantity} X $${price}`}</span>
			</div>
		</div>
	)
}
export default CartItem;