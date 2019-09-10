import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../Custom-button/CustomButton';
import {actionAdditem} from '../../redux/CartReducer/ActionCart';
import {selectcurrentUser} from '../../redux/UserReducer/User.selector';
import './imageprev.css'
const ImagePrev=({item,actionAdditem,currentUser,history})=>{
	const {id,imageUrl,name,price} = item;
	return(
		<div className="imageprev">
			<div className="bgshow" style={{backgroundImage:`url(${imageUrl})`}}>
			<CustomButton onClick={()=>{
				currentUser ? 
				actionAdditem({id,imageUrl,name,price})
				:
				history.push('/signin')}
			}
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
const mapStateToProps=createStructuredSelector({
	currentUser:selectcurrentUser
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ImagePrev));