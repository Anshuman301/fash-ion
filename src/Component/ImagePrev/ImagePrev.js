import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../Custom-button/CustomButton';
import {actionAdditem} from '../../redux/CartReducer/ActionCart';
import './imageprev.css'
const ImagePrev=({item,actionAdditem})=>{
	const {id,imageUrl,name,price} = item;
	return(
		<div className="imageprev">
			<div className="bgshow" style={{backgroundImage:`url(${imageUrl})`}}>
			<CustomButton onClick={()=>actionAdditem({id,imageUrl,name,price})}
			isinverted={true}>
			add to cart
			</CustomButton>
			</div>
			<div className="detailsimage">
				<span>{name}</span>
				<span>{price}</span>
			</div>
		</div>
	)
}
const mapDispatchToProps=dispatch=>({
	actionAdditem:(item)=>dispatch(actionAdditem(item))
})
export default connect(null,mapDispatchToProps)(ImagePrev);