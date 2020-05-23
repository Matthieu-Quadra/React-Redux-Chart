import React, { Component } from 'react';
import { fetchCountries, fetchRateExchange } from '../actions/index';
import { connect } from 'react-redux';
import lodash from 'lodash';

class SearchBar extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchCountries();
    }
    getSelectedCountry(e) {
        //console.log(e.target.value)
        const countryCode= e.target.value
        const country = lodash.find(this.props.countriesList.countries, { code : countryCode });
        //console.log(country)
        //this.props.fetchRateExchange(this.props.countriesList.countries[document.getElementById('paysList').selectedIndex]);
        this.props.fetchRateExchange(country);
    }
    renderSelectSearchBar () {
        return (
        <select id='paysList' className='searchBar form-control' onChange={(e) => this.getSelectedCountry(e)}>
            {
                this.props.countriesList.countries.map((country)=> {
                    return (
                    <option value={country.code} key={country.code}>{country.name} [{country.nativeName}]</option>
                    );
                })
            }
        </select>
        )
    } 
    
    render () {
        return (
            <form className='from-group'>
                {this.renderSelectSearchBar()}
            </form>
        )
    }
}

const mapDispatchToProps = {
    fetchCountries,
    fetchRateExchange
}

const mapStateToProps = state => {
    return {
        countriesList : state.countriesReducer
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
