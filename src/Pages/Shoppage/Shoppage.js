import React from 'react';
import {Route,Switch} from 'react-router-dom';
import CollectionOverview from '../../Component/CollectionOverview/CollectionOverview';
import CategoryPage from '../CategoryPage/CategoryPage';
import './shoppage.css';
const Shoppage=({match})=>{
	return(
		<div className="shoppage">
		<Switch>
			<Route exact path={`${match.path}`} component={CollectionOverview}/>
         	<Route path={`${match.path}/:name`} component={CategoryPage}/>
		</Switch>
		</div>
	)
}
export default Shoppage;