import React from 'react';
import './forminput.css';
const Forminput=({handleChange,label,...otherProps})=>{
	return(
		<div className="forminput">
			<input className="input"
			onChange={handleChange}
			{...otherProps}/>
			{
				label ?
				(<label className={`${otherProps.value.length ? "shrink" : " "}  labelcss`}>
					{label}
				</label>)
				:null
			}
		</div>
	)
}
export default Forminput;