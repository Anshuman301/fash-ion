import React from 'react';
import './custombutton.css'
const CustomButtom=({children,isGoogleSignin,isinverted,...otherProps})=>{
	return(
		<button {...otherProps} className={`${isinverted && "inverted"} ${isGoogleSignin && "google-sign-in"} buttoncss`}>{children.toUpperCase()}</button>
	)
}
export default CustomButtom;