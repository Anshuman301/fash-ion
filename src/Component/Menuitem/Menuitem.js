import React from 'react';
import './menuitem.css'
const Menuitem=({imageUrl,title})=>{
	return(
		<div className='menuitem'>
		<div className='bg-image' style={{backgroundImage:`url(${imageUrl})`}}/>
			<div className='content'>
				<h1 className='partname'>{title}</h1>
				<span className='subtitle'>SHOP_NOW</span>
			</div>
		</div>
	)
}

export default Menuitem;