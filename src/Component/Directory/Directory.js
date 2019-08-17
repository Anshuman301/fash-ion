import React from 'react';
import sections from '../../directorydata'
import './directory.css';
import Menuitem from '../Menuitem/Menuitem'
class Directory extends React.Component{
	static defaultProps={
		menuitems:sections
	}
	render(){
		return(
			<div className='directory'>
			{
				this.props.menuitems.map(({id,...otherProps})=>(
					<Menuitem key={id} {...otherProps}/>
				))
			}
			</div>
		)
	}
}
export default Directory;