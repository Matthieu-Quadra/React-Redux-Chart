import { GET_COUNTRIES, DOLLAR_SYMBOL } from '../actions';

const initialSate = {
    countries: []
}
export default function (state = initialSate, action) {
    //console.log(action.type)
    switch(action.type){
        case GET_COUNTRIES :
            return {
                countries : getCountriesInfo(action.payload)
            };
        default : 
            return state;
    }
};

function getCountriesInfo(data){
    //console.log('je passe')
    return data.map(c => {
        //console.log(c.currencies[0].code);
            return {
                name: c.name,
                nativeName: c.nativeName,
                currencyCode: c.currencies[0].code,
                currencySymbol : c.currencies[0].symbol,
                flag: c.flag,
                code: c.alpha3Code
            }    
    }).filter(c => {
        return c.currencyCode !== DOLLAR_SYMBOL;
    });
};