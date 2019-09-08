import React from 'react';
import {connect} from 'react-redux';
import {newSelectCollection} from '../../redux/CollectionReducer/Collection.select';
import ImagePrev from '../../Component/ImagePrev/ImagePrev';
import './categorypage.css';

const CategoryPage=({collection})=>{
	return(
		<div className="categorycss">
			<h1 className="titlecss">{collection.title}</h1>
			{
			 collection.items.map(item=><ImagePrev key={item.id} item={item}/>)
			}
		</div>
	)
}
const mapStateToProps=(state,ownProps)=>({
	collection:newSelectCollection(ownProps.match.params.name)(state)
})
export default connect(mapStateToProps)(CategoryPage);