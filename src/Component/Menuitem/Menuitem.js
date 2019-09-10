import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuitem.css'
const Menuitem=({imageUrl,title,history})=>{
	return(
		<div className='menuitem'>
		<div className='bg-image' style={{backgroundImage:`url(${imageUrl})`}}/>
			<div className='content' onClick={()=>history.push(`shop/${title}`)}>
				<h1 className='partname'>{title}</h1>
				<span className='subtitle'>SHOP_NOW</span>
			</div>
		</div>
	)
}

export default withRouter(Menuitem);