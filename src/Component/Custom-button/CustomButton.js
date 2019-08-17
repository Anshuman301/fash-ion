import React from 'react';
import './custombutton.css'
const CustomButtom=({children,isGoogleSignin,...otherProps})=>{
	return(
		<button {...otherProps} className={`${isGoogleSignin && "google-sign-in"} buttoncss`}>{children.toUpperCase()}</button>
	)
}
export default CustomButtom;