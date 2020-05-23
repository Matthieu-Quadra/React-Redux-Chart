import { GET_RATES } from '../actions';

const initialState = {
    rates: []
}
export default function (state = initialState, action) {
    switch(action.type){
        case GET_RATES :
            return {
                ...state,
                rates : [action.payload, ...state.rates]
            };
        default :
            return state;
    }
};