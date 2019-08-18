import {combineReducers} from 'redux';
import UserReducer from './UserReducer/UserReducer';
import CartReducer from './CartReducer/CartReducer';
const RootReducers = combineReducers({
	user:UserReducer,
	cart:CartReducer
});

export default RootReducers;