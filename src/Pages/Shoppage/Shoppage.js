import React from 'react';
import {SHOP_DATA} from '../../shopdata';
import PreCollec from '../../Component/PreCollec/PreCollec';
import './shoppage.css';
class Shoppage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			collections:SHOP_DATA
		}
	}

	render(){
		const{collections}=this.state;
		return(
			<div className="shoppage">
			{
				collections.map(({id,...otherprops})=>(
				<PreCollec key={id} {...otherprops}/>
				))
			}
			</div>
		)
	}
}
export default Shoppage;