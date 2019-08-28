import React from 'react';
import ImagePrev from '../../Component/ImagePrev/ImagePrev';
import './preCollec.css';
const PreCollec=({title,items})=>{
	return(
		<div className="precollec">
			<h1 style={{margin:"0"}}>{title}</h1>
			<div className="styleitem">
			{
				items.filter((it,idx)=>idx < 4)
				.map(it => <ImagePrev key={it.id} item={it}/>
				)
			}
			</div>
		</div>
	)
}

export default PreCollec;