import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShopBag} from '../../assets/shoping-bag.svg';
import './carticon.css';
import {actionCart} from '../../redux/CartReducer/ActionCart';

const CartIcon=({actionCart})=>{
	return(
		<div onClick={actionCart} style={{cursor:"pointer"}}>
			<ShopBag className="bagcss"/>
			<span className="count-item">1</span>
		</div>
	)
}
const mapDispatchToProps=dispatch=>({
	actionCart :()=>dispatch(actionCart())
})
export default connect(null,mapDispatchToProps)(CartIcon);