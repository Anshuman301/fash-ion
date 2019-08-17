import React from 'react';
import {auth,signInWithGoogle} from '../../firebase/firebase.util';
import Forminput from '../Forminput/Forminput';
import CustomButton from '../Custom-button/CustomButton';
import './formsignin.css';
class FormSignin extends React.Component{
	constructor(){
		super();
		this.state={
			email:'',
			password:''
		}
	}
	handleChange=(evt)=>{
		this.setState({[evt.target.name]:evt.target.value})
	}
	handleSubmit=async (evt)=>{
		evt.preventDefault();
		const {email,password}=this.state;
		try{
			await auth.signInWithEmailAndPassword(email,password);
			this.setState({email:'',password:''});
		}catch(err){
			console.log("login failed :",err.message);
		}
	}
	render(){
		return(
			<div className="formsignin">
				<form onSubmit={this.handleSubmit}>
					<div><h4>If you have alrady registered</h4></div>
					<span>Then,Signin</span>
						<Forminput 
						label="Email" 
						name="email" 
						type="email" 
						value={this.state.email} 
						required 
						handleChange={this.handleChange}
						/>
						<Forminput 
						label="Password" 
						name="password" 
						type="password" 
						value={this.state.password} 
						required 
						onChange={this.handleChange}
						/>
					<div className="buttcss">
				  	<CustomButton type="submit">sign in</CustomButton>
				  	<CustomButton onClick={signInWithGoogle} isGoogleSignin>sign in with google</CustomButton>
				  	</div>
				</form>
		</div>
		)
	}
}

export default FormSignin;