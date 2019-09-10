import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartState,sumCartItems} from '../../redux/CartReducer/Cart.select';
import CheckItem from '../../Component/CheckItem/CheckItem';
import StripeCheckoutButton from '../../Component/Stripe-button/Stripe-button';
import './checkout.css';
const Checkout=({cartitems,total})=>{
	return(
		<div className="checkout">
			<div style={{borderBottom:"1px solid lightgray"}}>
			<div className= "headblock">
				<span className="product">Product</span>
				<span className="desc">Description</span>
				<span className="quant">Quantity</span>
				<span className="pri">Price</span>
				<span className="remove">Remove</span>
			</div>
			</div>
			{
				cartitems.map(items => (
						<CheckItem key ={items.id} items={items}/>
				))
			}
			<div className="totalcss">
				<span>{`Total : $${total}`}</span>
			</div>
			<div className="demodesc">
				<span>/* For demo purposes: Use card no:4242 4242 4242 4242, Expiry Date:01/20 Cvv:123 */</span>
			</div>
			<div className="stripebutcss">
				<StripeCheckoutButton price={total}/>
			</div>
		</div>
	)
}
const mapStateToProps= createStructuredSelector({
	cartitems:selectCartState,
	total:sumCartItems
})
export default connect(mapStateToProps,null)(Checkout);