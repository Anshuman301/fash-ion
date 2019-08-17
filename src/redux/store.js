import { createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducers from './RootReducers';

const store = createStore(RootReducers,applyMiddleware(logger));

export default store;