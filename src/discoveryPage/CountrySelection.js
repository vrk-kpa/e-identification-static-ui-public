import React from 'react';
import PropTypes from 'prop-types';

import SignInOptionList from './SignInOptionList.js';
import Translated from '../Translated.js';

class CountrySelection extends React.Component {

    getMethodsToShow(countries) {
        let authMethods = this.props.authMethods.split(';');
        let methodsToShow = [];
        let filteredCountries = [];

        if (authMethods.indexOf('FFI') >= 0) {
            filteredCountries = filteredCountries.concat(countries.filter(item => item.authProviderEntityId === 'ULK_TUN'));
        }

        if (authMethods.indexOf('eLoA2') >= 0 && this.props.eidasSupport !== 'none') {
           filteredCountries = filteredCountries.concat(countries.filter(item => item.authProviderEntityId === 'EIDAS_SUBSTANTIAL'));
        }

        if (authMethods.indexOf('eLoA3') >= 0 && this.props.eidasSupport !== 'none') {
           let tmpCountries = filteredCountries.concat(countries.filter(item => item.authProviderEntityId === 'EIDAS_HIGH'));
           //Only add countries if not already added in the previous step
           tmpCountries.forEach((c) => {
               if (!filteredCountries.some(x => x.countryCode === c.countryCode)) {
                   filteredCountries.push(c);
               }
           });
        }

        filteredCountries.forEach((c) => {
            if (c && c.enabled) {
                methodsToShow.push(c);
            }
        });
        methodsToShow.sort((a, b) => {
            if (a.sortOrder < b.sortOrder)
                return -1;
            else if (a.sortOrder === b.sortOrder)
                return 0;
            else return 1;
        });
        return methodsToShow;
    }
    render() {
        let methodsToShow = this.getMethodsToShow(this.props.availableCountries);
        return (
            <div className="row" className="sign-in-options">
                <div className="col-xs-12">
                    <Translated tag="h2" id="valinta__vaihtoehto__otsikko_valitse_maa" />
                    <SignInOptionList allowedMethods={methodsToShow}/>
                </div>
            </div>
        );
    }
}

CountrySelection.propTypes = {
    authMethods: PropTypes.string.isRequired,
    availableCountries: PropTypes.array.isRequired,
    eidasSupport: PropTypes.string.isRequired
};

export default CountrySelection;
