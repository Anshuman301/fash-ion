import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectory} from '../../redux/DirectoryReducer/Directory.select';
import './directory.css';
import Menuitem from '../Menuitem/Menuitem'

	const Directory=({sections})=>{
		return(
			<div className='directcss'>
			{
				sections.map(({id,...otherProps})=>(
					<Menuitem key={id} {...otherProps}/>
				))
			}
			</div>
		)
	}
const mapStateToProps=createStructuredSelector({
	sections:selectDirectory
})
export default connect(mapStateToProps)(Directory); 	