import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price}) =>{
	const priceForStripe=price*100;
	const publishKey="pk_test_HxinyJWhQwB2hXnwwAhz8cys00mqtnJWxm";
	const onToken=token=>{
		console.log(token);
		alert("Payment Successful")
	}
	return(
		<StripeCheckout
			label='Pay Now'
			name="Fash-ion"
			billingAddress
			shippingAddress
			image='http://svgshare.com/i/CUz.svg'
			description = {`Your total is $${price}`}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishKey}
		/>

	)
}

export default StripeCheckoutButton;