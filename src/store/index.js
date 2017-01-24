import appReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux'

export default (initialState={}) => {
	return createStore(appReducer, initialState, composeWithDevTools());
}