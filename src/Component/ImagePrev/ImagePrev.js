import React from 'react';
import './imageprev.css'
const ImagePrev=({imageUrl,name,price})=>{
	return(
		<div className="imageprev">
			<div className="bgshow" style={{backgroundImage:`url(${imageUrl})`}}/>
			<div className="details">
				<span>{name}</span>
				<span>{price}</span>
			</div>
		</div>
	)
}

export default ImagePrev;