import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {changeSelectCollection} from '../../redux/CollectionReducer/Collection.select';
import PreCollec from '../PreCollec/PreCollec';

const CollectionOverview =({collections})=>{
	return(
		<div className="overviewcss">
			{
				collections.map(({id,...otherprops})=>(
				<PreCollec key={id} {...otherprops}/>
				))
			}
		</div>
	)
}
const mapStateToProps=createStructuredSelector({
	collections:changeSelectCollection
})
export default connect(mapStateToProps)(CollectionOverview);