import React from 'react';
import {connect} from 'react-redux';
import {actionAdditem,actionRemoveItem,actionRemoveOne} from '../../redux/CartReducer/ActionCart';
import './checkitem.css';
const CheckItem = ({items,actionRemoveItem,actionAdditem,actionRemoveOne})=>{
	const {imageUrl,name,quantity,price}=items;
	const style={
		cursor:"pointer"
	}
	return(
		<div className="carthead">
			<div className="imgcss">
				<img className="setimg" src={imageUrl} alt={name}/>
			</div>
			<span className="name">{name}</span>
			<div className="quanincdec">
			<span style={style} onClick={()=>{
				quantity === 1 ?
				actionRemoveItem(items)
				:
				actionRemoveOne(items)}
			}>
			&#10094;
			</span>
			<span className="quantity">{quantity}</span>
			<span style={style} onClick={() => actionAdditem(items)}>&#10095;</span>	
			</div>
			<span className="price">{price}</span>
			<div className="iconx">
			<span onClick={()=>actionRemoveItem(items)}>&#10005;</span>
			</div>
		</div>
	)
}
const mapDispatchToProps = dispatch=>({
	actionRemoveItem:(item) => dispatch(actionRemoveItem(item)),
	actionAdditem:(item) => dispatch(actionAdditem(item)),
	actionRemoveOne:(item)=>dispatch(actionRemoveOne(item))
})
export default connect(null,mapDispatchToProps)(CheckItem);