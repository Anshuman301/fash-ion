import React from 'react';
import {withRouter} from "react-router-dom";
import ImagePrev from '../../Component/ImagePrev/ImagePrev';

import './preCollec.css';
const PreCollec=({title,items,routeName,history})=>{
	return(
		<div className="precollec">
			<h1 style={{margin:"0", cursor:"pointer"}} onClick={() => history.push(`/shop/${routeName}`)} >{title}</h1>
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

export default withRouter(PreCollec);