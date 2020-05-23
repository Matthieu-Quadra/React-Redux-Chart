import { combineReducers } from 'redux';
import ReducerCountries from './reducer_countries';
import ReducerRates from './reducer_rates';

const rootReducer = combineReducers({
  countriesReducer: ReducerCountries,
  ratesReducer: ReducerRates
});

export default rootReducer;
