import { createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import RootReducers from './RootReducers';

const store = createStore(RootReducers,applyMiddleware(logger));
const persister=persistStore(store);
export {store,persister};