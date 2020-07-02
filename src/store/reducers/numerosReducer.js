import * as AcTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    min: 1,
    max: 10
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AcTypes.NUM_MAX_ALTERADO: return { ...state, max: action.payload };
        case AcTypes.NUM_MIN_ALTERADO: return { ...state, min: action.payload };
        default: return state;
    }
}