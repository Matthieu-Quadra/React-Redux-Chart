import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_RATES = 'GET_RATES'
export const DOLLAR_SYMBOL = 'USD'

export function fetchCountries(){
    return function(dispatch){
        axios.get("https://restcountries.eu/rest/v2/all").then(axiosResponse => {
            dispatch({ type: GET_COUNTRIES, payload: axiosResponse.data})
        })
    }
}

export function fetchRateExchange (country) {
    return function(dispatch){
            axios.get(`https://api.exchangeratesapi.io/history?base=USD&start_at=${getLastMonthDate()}&end_at=${getDateFormated(new Date())}&symbols=${country.currencyCode}`).then(axiosResponse => {
                dispatch({ type: GET_RATES, payload: {rates: axiosResponse.data.rates, ...country}})
            }).catch(error => {
                dispatch({ type: GET_RATES, payload: {rates: [], ...country}})
            })
    }
}

function getDateFormated(date){
    return date.toISOString().split('T')[0];
}

function getLastMonthDate() {
    let now = new Date();
    now.setMonth(now.getMonth() -1);
    return getDateFormated(now);
}