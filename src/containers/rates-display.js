import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart } from 'react-chartkick'
import 'chart.js'

class RatesDiplay extends Component {
   renderRatesDiplay () {
        //console.log(this.props.ratesList)
        return (
            <tbody>
                {
                    this.props.ratesList.rates.map((country, index) => {
                        //console.log(country.flag)
                        return (
                            <tr key={country.code+index}>
                                <td><h3>{country.name}</h3><img src={country.flag} alt='drapeau' className='imgFlag' width='100' height='60'></img></td>
                                <td className='col-md-12'><AreaChart data={this.formatedData(country.rates, country.currencyCode)} xtitle='Date' ytitle={country.currencyCode}/></td>
                            </tr>
                        )
                    })        
                }
            </tbody>
        )
    } 
    
    formatedData(rates, currencyCode) {
        return Object.keys(rates).map(date => {
            return [date, rates[date][currencyCode]]
        })
    }
    render () {
        return (
            <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Pays</th><th className='col-md-6'>Graphique de la monnaie en référence USD</th>
                    </tr>
                </thead>
                {this.renderRatesDiplay()}
            </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        ratesList : state.ratesReducer
    };
}
export default connect(mapStateToProps,undefined)(RatesDiplay);
