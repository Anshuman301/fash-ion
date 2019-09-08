import {SHOP_DATA} from '../../shopdata';

const init={
	shopdata:SHOP_DATA
}

const CollectionReducer=(state=init,action)=>{
	switch(action.type){
		default:
			return state;
	}
}

export default CollectionReducer;