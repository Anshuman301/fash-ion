import React from 'react';
import './signinup.css';
import FormSignin from '../../Component/FormSignin/FormSignin';
import FormSignup from '../../Component/FormSignup/FormSignup';
const Signinup=()=>{
	return(
		<div className="signinupstyle">
			<FormSignin/>
			<FormSignup/>
		</div>
	)
}
export default Signinup;