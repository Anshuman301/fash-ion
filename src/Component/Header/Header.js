import React from 'react';
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.css';
import { auth } from '../../firebase/firebase.util.js';

const Header=({currentUser})=>{
	return(
		<div className="header">
			<NavLink exact to="/">
				<Logo  className="logostyle"/>
			</NavLink>
			<div className="options">
				<NavLink className="option" exact to='/shop' activeClassName="active-option">SHOP</NavLink>
				<NavLink className="option" exact to='/contact' activeClassName="active-option">CONTACT</NavLink>
				{
					currentUser ?
					<div className="option" onClick={()=>auth.signOut()}>SIGN_OUT</div>
					:
					<NavLink className="option" exact to='/signin' activeClassName="active-option">SIGN_IN</NavLink>

				}
				</div>
		</div>
	)
}

const mapStateToProps=(state)=>({
	currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header);