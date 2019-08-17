import {combineReducers} from 'redux';
import UserReducer from './UserReducer/UserReducer';
const RootReducers = combineReducers({
	user:UserReducer
});

export default RootReducers;