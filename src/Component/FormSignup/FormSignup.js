import React from 'react';
import { auth,createUserProfile } from '../../firebase/firebase.util.js';
import Forminput from '../Forminput/Forminput';
import CustomButton from '../Custom-button/CustomButton';
import './formsignup.css'
class FormSignup extends React.Component{
	constructor(props){
		super(props);
		this.state={
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		}
	}
	handleChange=(evt)=>{
		this.setState({[evt.target.name]:evt.target.value})
	}
	 handleSubmit=async (evt)=>{
		evt.preventDefault();
		const {displayName,email,password,confirmPassword}=this.state;
		if(password !== confirmPassword){
			alert("password don't match");
			return;
		}
		try{
			const {user} = await auth.createUserWithEmailAndPassword(email,password);
			await createUserProfile(user,{displayName});
			this.setState({
				displayName:'',
				email:'',
				password:'',
				confirmPassword:''
			});
		}catch(err){
			console.log("error on Signup",err.message);
		}
	}
	render(){
		return(
			<div className="fsupcss">
				<h4> Don't have an account...</h4>
				<span>Get Registerd....</span>
				<form onSubmit={this.handleSubmit}>
				<Forminput
					name="displayName"
					type="text"
					onChange={this.handleChange}
					label="Display Name"
					value={this.state.displayName}
					required
				/>
				<Forminput
					name="email"
					type="email"
					onChange={this.handleChange}
					label="Email"
					value={this.state.email}
					required
				/>
				<Forminput
					name="password"
					type="password"
					onChange={this.handleChange}
					label="Password"
					value={this.state.password}
					required
				/>
				<Forminput
					name="confirmPassword"
					type="text"
					onChange={this.handleChange}
					label="Confirm Password"
					value={this.state.confirmPassword}
					required
				/>
				<CustomButton type="submit">sign up</CustomButton>
				</form>
			</div>
		)
	}
}
export default FormSignup;