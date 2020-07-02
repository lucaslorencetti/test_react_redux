import { createStore, combineReducers } from 'redux';
import nomerosReducer from './reducers/numerosReducer'

const reducers = combineReducers({
    numeros: nomerosReducer,
});

export default createStore(reducers);