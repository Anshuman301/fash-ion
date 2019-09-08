import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducer from './UserReducer/UserReducer';
import CartReducer from './CartReducer/CartReducer';
import DirectoryReducer from './DirectoryReducer/DirectoryReducer';
import CollectionReducer from './CollectionReducer/CollectionReducer';
const persistConfig = {
	key:"root",
	storage,
	whitelist:['cart']
}
const RootReducers = combineReducers({
	user:UserReducer,
	cart:CartReducer,
	directory:DirectoryReducer,
	collection:CollectionReducer
});

export default persistReducer(persistConfig,RootReducers);